import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Post, Lojas } from './../interfaces/content';
import { environment } from './../../../environments/environment.prod';
import { Ofertas } from '../interfaces/ofertas';

const v1: string = environment.v1;
const v3: string = environment.v3;
@Injectable({
  providedIn: 'root'
})

export class DataService {


  constructor(private http: HttpClient) { }

  private data$: BehaviorSubject<Ofertas[]> = new BehaviorSubject(null);

  private region$: BehaviorSubject<any[]> = new BehaviorSubject(null);

  private loja$: BehaviorSubject<Lojas[]> = new BehaviorSubject(null);

  getData$ = (): Observable<Ofertas[]> => this.data$.asObservable();
  setData$ = (items: Ofertas[]) => this.data$.next(items);
  getRegion$ = (): Observable<any[]> => this.region$.asObservable();
  setRegion$ = (items: any[]) => this.region$.next(items);
  getLojas$ = (): Observable<Lojas[]> => this.loja$.asObservable();
  setLojas$ = (items: Lojas[]) => this.loja$.next(items);

  /** * API Marketing */
  getCollection = (query: string): Observable<any[]> => this.http.get<any[]>(`${ environment.v1 }/${query}`);

  getOfertas = (loja: number, campanha: number): Observable<Ofertas[]> => {
    return this.http.get<Ofertas[]>(`/Ofertas/LojaProdutosCampanha?loja=${loja}&campanha=${campanha}`)
    .pipe(tap( res => this.setData$(res)));
  }

  /**
   * Read Post Blog
   * @param tag Tag pra filtar os POST
   * @param limit Limit do POST
   */
  getPostTagLimit = (tag = 0, limit: number = 3): Observable<Post[]> => {
    if (tag === 0) {
      return this.http.get<Post[]>(`${ environment.v4 }/posts?per_page=${limit}`);
    }
    return this.http.get<any[]>(`${ environment.v4 }/posts?per_page=${limit}&tags=${tag}`);
  }


  /** * Regão e Lojas */
  getLojas = (): Observable<Lojas[]> => {
    return this.http.get<Lojas[]>(`${ environment.v3 }/loja?per_page=100`).pipe(tap(data => this.setLojas$(data)));
  }
  getRegion = (): Observable<any[]> => {
    return this.http.get<any[]>(`${ environment.v3 }/region?per_page=100`).pipe(tap(data => this.setRegion$(data)));
  }

  /** * Data da LP */
  getDataApi = (): Observable<any[]> => {
    return this.http.get<any[]>(`${ environment.v2 }/landingpages`).pipe(
      map((res) => res.filter((row: any) => row.slug === environment.name)[0].data)
    );
  }

  getDataFile = (): Observable<any []> => this.http.get<any[]>('./assets/db.json').pipe(map(res => res[0]));

}
