import { DataService } from 'src/app/shared/services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-condor-mais-proximo',
  templateUrl: './condor-mais-proximo.component.html',
  styleUrls: ['./condor-mais-proximo.component.scss']
})
export class CondorMaisProximoComponent implements OnInit {

  @Input() item: any = [];

  loading: boolean = false;

  loja$: Observable<any>;
  lojas$: Observable<any[]>;
  region$: Observable<any[]>;

  constructor(
    private db: DataService
  ) { }

  ngOnInit(): void {
    this.region$ = this.db.getRegion$();
  }

  onLoja = (ev: any) => {
    const value = ev.target.value;
    this.lojas$ = this.db.getLojas$().pipe(
      map((res) => res.filter((row) => this.toSlug(row.cidade) === value))
    );
  }

  getLoja = (ev: any) => {
    this.loading = true;
    const value = ev.target.value;
    this.loja$ = this.db.getLojas$().pipe(
      map((res) => res.filter((row) => this.toSlug(row.slug) === value)[0]),
      delay(1000),
      tap(() => this.loading = false)
    );
  }

  trackById = (index: number, items: any) => items.id;

  private toSlug = (str: string) => {
    str = `${str}`;
    str = str.replace(/^\s+|\s+$/g, '').toLowerCase();
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
  }
}
