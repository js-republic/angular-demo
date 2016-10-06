import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';   // this adds the non-static 'toPromise' operator
import 'rxjs/add/operator/map';         // this adds the non-static 'map' operator
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Movie } from '../models/movie';

import 'rxjs/add/observable/interval';

import AppSettings from '../app-settings';


@Injectable()
export default class ThemoviedbService {
  /* ATTRIBUTES */
  private apiUrl: string = 'https://api.themoviedb.org/3/';
  private counter: number = 0;


  /* CONSTRUCTOR */
  constructor (private http: Http) { }


  /* METHODS */
  getMovieTopRated(page: number, cb: any): void {
    this.http
    .get(`${this.apiUrl}movie/top_rated?api_key=${AppSettings.GetApiKey()}&language=fr-FR&page=${page || 1}`)
    .toPromise().then(cb);
  }

  getMovieBySearching(name: string, cb: any): void {
    this.http
    .get(`${this.apiUrl}search/movie?api_key=${AppSettings.GetApiKey()}&language=fr-FR&query=${name}`)
    .toPromise().then(cb);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get(`${this.apiUrl}movie/${id}?api_key=${AppSettings.GetApiKey()}`)
    .map(this.extractData)
    .catch(this.handleError);
  }


  loadSomething() : Observable<number> {
    return Observable.interval(1000)
  }

  private extractData(res: Response) {
    const json = res.json();
    return json || {};
  }

  private handleError(error: any) {
    let errMsg;

    if (error.message) {
      errMsg = error.message;

    } else if (error.status) {
      errMsg = `${error.status} - ${error.statusText}`;

    } else {
      errMsg = 'Server error';

    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
