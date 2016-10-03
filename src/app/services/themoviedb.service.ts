import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator
import 'rxjs/add/operator/map';         // this adds the non-static 'map' operator

import AppSettings from './../app-settings';


@Injectable()
export default class ThemoviedbService {
    /* ATTRIBUTES */
    private apiUrl: string = 'https://api.themoviedb.org/3/';


    /* CONSTRUCTOR */
    constructor (private http: Http)
    { }


    /* METHODS */
    GetMovieTopRated(page:number, cb) {
        return this.http
            .get(`${this.apiUrl}movie/top_rated?api_key=${AppSettings.GetApiKey()}&language=fr-FR&page=${page || 1}`)
            .toPromise().then(cb);
    }

    GetMovieBySearching(name:string, cb) {
        return this.http
            .get(`${this.apiUrl}search/movie?api_key=${AppSettings.GetApiKey()}&language=fr-FR&query=${name}`)
            .toPromise().then(cb);
    }
/*
    GetMovieById(id:number, cb) {
        return this.http
            .get(`${this.apiUrl}search/movie?api_key=${AppSettings.GetApiKey()}&language=fr-FR&query=${name}`)
            .toPromise().then(cb);
    }*/
}
