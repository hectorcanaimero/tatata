import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { Lojas } from 'src/app/shared/interfaces/content';
import { Ofertas } from 'src/app/shared/interfaces/ofertas';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})

export class OfertasComponent implements OnInit {

  @Input() item: any = [];
  @Input() id = 'hiper-condor-pinheirinho';

  loja$: Observable<Lojas>;
  region$: Observable<any[]>;
  lojas$: Observable<Lojas[]>;
  items$: Observable<Ofertas[]>;
  menuDepartamento$: Observable<any[]>;
  slug$: Observable<string>;

  page: number = 1;
  type: number = 0;
  count: number = 0;
  type_departamento: number = 0 || undefined;

  isloading = false;
  toogle_filter = false;
  toogle_departamento = false;

  message = '';
  title_departamento = '' || undefined;

  constructor(
    private router: Router,
    private db: DataService,
    private act: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.region$ = this.db.getRegion$();
    this.getOnInit();
    // this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    // this.slug$.subscribe((res) => {
    //   if (res) {
    //     this.getOnInit(res);
    //   } else {
    //     this.getOnInit(this.id);
    //   }
    // });
  }

  getOnInit = (slug = this.id) => {
    this.loja$  = this.db.getCollection(`Lojas?filter[where][slug]=${slug}`)
    .pipe(
      map(res => res[0]),
      tap((res) => {
        this._onProdutos(res.cod_loja);
        this._onMenuDepartamento(res.cod_loja);
      })
    );
  }

  onSelectDepartamento = (e: any, loja: number) => {
    const codigo = e.target.value;
    this.isloading = true;
    this.items$ = this.db.getCollection(`${this.item.collection.departamento}&loja=${loja}&departamento=${codigo}`)
    .pipe(
      debounceTime(500),
      tap(() => this.isloading = false)
    );
  }

  // Falta hacer un scroll de 500 px para arriba
  loadProdutos = (e: any) => {
    this.isloading  =true;
    this.items$ = this.db.getData$().pipe( debounceTime(500), tap(() => this.isloading = false) );
  }

  _onProdutos = (loja: number) => {
    this.items$ = this.db.getCollection(`${this.item.collection.ofertas}&loja=${loja}`).pipe(tap((res) => this.db.setData$(res)));
  }

  _onMenuDepartamento = (loja: number) => {
    this.menuDepartamento$ = this.db.getCollection(`${this.item.collection.menu}&loja=${loja}`);
  }

  onLojas = (e: any) => {
    this.lojas$ = this.db.getLojas$()
    .pipe( map((res) => res.filter((row) => this._toSlug(row.cidade) === e.target?.value)) );
  }

  goToLoja = (ev: any) => {
    this.isloading = true;
    const value = + ev.target.value;
    console.log(value);
    this.loja$  = this.db.getCollection(`Lojas?filter[where][cod_loja]=${value}`).pipe(map(res => res[0]))
    this.items$ = this.db.getCollection(`${this.item.collection.ofertas}&loja=${value}`)
    .pipe(
      debounceTime(500),
      tap((res) =>  this.db.setData$(res)),
      tap(() =>  this.isloading = false)
    );
  }

  private _toSlug = (str: string) => {
    str = `${str}`;
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
  }

  // Search
  onSearch = (e: any, loja: number) => {
    this.isloading = true;
    const value = `${e.target.value}`.toLocaleLowerCase();
    this.items$ = this.db.getData$().pipe(
      map(res => res['filter']((row: any) => row.produtos['dsc_produto'].toLowerCase().includes(value))),
      debounceTime(500),
      tap(res => {
        if(res['length'] < 1) {this.message = 'Não há produtos disponíveis.'; }
        this.isloading = false;
      })
    );
  }

  // Fitros
  onToogleFilter = () => {
    this.toogle_filter = !this.toogle_filter;
    console.log(this.toogle_filter);
  }
  onToogleDepartamento = () => this.toogle_departamento = !this.toogle_departamento;

  onFiltro = (e: any) => {
    this.isloading = true;
    const type = +e.target.value;
    if (type === 0) { this.okProdutosFakes(); }
    else if (type === 1) { this.onProdutosCashback(); }
    else if (type === 2) { this.onProdutosClubeCondor(); }
    else if (type === 3) { this.onProdutosPack(); }
    else if (type === 4) { this.onProdutosPrecoDown(); }
  }

  onFiltroMobile = (type: any) => {
    this.isloading = true;
    this.type = type;
    if (type === 0) { this.okProdutosFakes(); }
    else if (type === 1) { this.onProdutosCashback(); }
    else if (type === 2) { this.onProdutosClubeCondor(); }
    else if (type === 3) { this.onProdutosPack(); }
    else if (type === 4) { this.onProdutosPrecoDown(); }
  }

  okProdutosFakes = () => {
    this.items$ = this.db.getData$().pipe(
      debounceTime(500),
      map(res => res),
      tap(() => this.isloading = false)
    );
  }

  onProdutosCashback = () => {
    this.items$ = this.db.getData$().pipe(
      debounceTime(500),
      map(res => res['filter']((row: any) => row.preco_cashback > 0)),
      tap(() => this.isloading = false)
    );
  }

  onProdutosClubeCondor = () => {
    this.items$ = this.db.getData$().pipe(
      debounceTime(500),
      tap(() => this.isloading = false),
      map(res => res['filter']((row: any) => row.preco_clube > 0)),
    );
  }

  onProdutosPrecoDown = () => {
    this.items$ = this.db.getData$().pipe(
      debounceTime(500),
      map(res => res['sort']((a: any, b: any) => a.preco_regular - b.preco_regular)),
      tap(() => this.isloading = false)
    );
  }

  onProdutosPack = () => {
    this.items$ = this.db.getData$().pipe(
      debounceTime(500),
      map(res => res['filter']((row: any) => row.dsc_kit)),
      tap(() => this.isloading = false)
    );
  }
}
