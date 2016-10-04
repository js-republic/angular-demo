import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import ThemoviedbService from './../services/themoviedb.service';


@Component({
    selector: 'app-themoviedb',
    templateUrl: './themoviedb.component.html',
    styleUrls: ['./themoviedb.component.css'],
    providers: [ThemoviedbService]
})
export class ThemoviedbComponent implements OnInit {
    /* ATTRIBUTES */
    public movies: Array<Object>;
    public page: number;
    public totalPages: number;
    public searchName: string;


    /* LIFECYCLE */
    constructor (private _themoviedbService: ThemoviedbService) { }

    ngOnInit(): void {
        this.getMovieTopRated(undefined);
    }


    /* EVENTS */
    public previousPage(): void {
        if (this.page > 0) {
            this.getMovieTopRated(this.page - 1);
        }
    }

    public nextPage(): void {
        if (this.page < this.totalPages) {
            this.getMovieTopRated(this.page + 1);
        }
    }

    public searchUpdate(): void {
        if (this.searchName.length > 2) {
            this.getMovieBySearching(this.searchName);

        } else if (!this.searchName.length) {
            this.clearSearch();

        }
    }

    public clearSearch(): void {
        this.searchName = '';
        this.getMovieTopRated(undefined);
    }


    /* METHODS */
    public getMovieBySearching(name: string): void {
        this._themoviedbService.getMovieBySearching(name, (response: Response) => {
            this.updateMovies(response.json());
        });
    }

    public getMovieTopRated(page: number): void {
        this._themoviedbService.getMovieTopRated(page || this.page, (response: Response) => {
            this.updateMovies(response.json());
        });
    }

    private updateMovies(data): void {
        this.movies     = data.results;
        this.page       = data.page;
        this.totalPages = data.total_pages;
    }
}
