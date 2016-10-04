import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import ThemoviedbService from "./../services/themoviedb.service";


@Component({
    selector: 'app-themoviedb',
    templateUrl: './themoviedb.component.html',
    styleUrls: ['./themoviedb.component.css'],
    providers: [ThemoviedbService]
})
export class ThemoviedbComponent implements OnInit {
    /* ATTRIBUTES */
    public movies:Array<Object>;
    public page:number;
    public totalPages:number;
    public searchName:string;


    /* LIFECYCLE */
    constructor (private _themoviedbService: ThemoviedbService) { }

    ngOnInit() {
        this.getMovieTopRated();
    }


    /* EVENTS */
    previousPage() {
        if (this.page > 0) {
            this.getMovieTopRated(this.page - 1);
        }
    }

    nextPage() {
        if (this.page < this.totalPages) {
            this.getMovieTopRated(this.page + 1)
        }
    }

    searchUpdate() {
        if (this.searchName.length > 2) {
            this.getMovieBySearching(this.searchName);

        } else if (!this.searchName.length) {
            this.clearSearch();

        }
    }

    clearSearch() {
        this.searchName = "";
        this.getMovieTopRated();
    }


    /* METHODS */
    getMovieBySearching(name:string) {
        this._themoviedbService.getMovieBySearching(name, (response: Response) => {
            this.updateMovies(response.json())
        });
    }

    getMovieTopRated(page:number = 1) {
        this._themoviedbService.getMovieTopRated(page || this.page, (response: Response) => {
            this.updateMovies(response.json());
        });
    }

    updateMovies(data) {
        this.movies     = data.results;
        this.page       = data.page;
        this.totalPages = data.total_pages;
    }
}
