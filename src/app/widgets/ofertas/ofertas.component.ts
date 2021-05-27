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
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  @Input() item: any = [];
  @Input() id = 'hiper-condor-pinheirinho';

  slug$: Observable<string>;
  loja$: Observable<Lojas>;
  region$: Observable<any[]>;
  lojas$: Observable<Lojas[]>;
  items$: Observable<Ofertas[]>;
  menuDepartamento$: Observable<any[]>;

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
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe((res) => {
      if (res) this.getOnInit(res);
      else this.getOnInit(this.id);
    });
  }

  getOnInit = (slug: string) => {
    this.loja$  = this.db.getCollection(`Lojas?filter[where][slug]=${slug}`)
    .pipe( map(res => res[0]), tap((res) => {
        this._onProdutos(res.cod_loja);
        this._onMenuDepartamento(res.cod_loja);
      })
    );
  }

  onSelectDepartamento = (ev: any, loja?: number) => {
    const value = +ev.target.value;
    this.isloading = true;
    if (value === 0) {
      console.log(value);
      this.items$ = this.db.getData$().pipe(debounceTime(500), tap(() => this.isloading = false));
    } else {
      this.items$ = this.db.getData$()
      .pipe(
        map((res) =>  res.filter((row: any) => row.departamento === value)),
        debounceTime(500), tap(() => this.isloading = false));
    }
  }

  onSearch = (ev: any, loja: number) => {
    const value = `${ev.target.value}`.toLowerCase();
    this.items$ = this.db.getData$()
    .pipe(
      map(res => res.filter((row: any) => row.produtos.dsc_produto.toLowerCase().includes(value))),
      debounceTime(500),
      tap(res => { if(res.length < 1) this.message = 'Não há produtos disponíveis.'; })
    );
  }

  /**
   * Select todos os produtos com o kit pela loja
   * @param loja
   */
  _onProdutos = (loja: number) => {
    this.items$ = this.db.getCollection(`${this.item.collection.ofertas}loja=${loja}`)
      .pipe(
        map((res) =>  res.filter((row: any) => row.dsc_kit)),
        tap((res) =>  this.db.setData$(res) )
      );
  }

  _onMenuDepartamento = (loja: number) => {
    this.menuDepartamento$ = this.db.getCollection(`${this.item.collection.menu}loja=${loja}`);
  }

  onLojas = (e: any) => {
    this.lojas$ = this.db.getLojas$()
    .pipe( map((res) => res.filter((row) => this._toSlug(row.cidade) === e.target?.value)) );
  }

  goToLoja = (ev: any) => {
    this.isloading = true;
    const value = + ev.target.value;
    this.loja$  = this.db.getCollection(`Lojas?filter[where][cod_loja]=${value}`).pipe(map(res => res[0]))
    this.items$ = this.db.getCollection(`${this.item.collection.ofertas}loja=${value}`)
      .pipe(
        map((res) =>  res.filter((row: any) => row.dsc_kit)),
        debounceTime(500),
        tap((res) =>  {
          this.db.setData$(res);
          this.isloading = false;
        })
      );
  }

  private _toSlug = (str: string) => {
    str = `${str}`;
    str = str.replace(/^\s+|\s+$/g, '').toLowerCase();
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }
}
