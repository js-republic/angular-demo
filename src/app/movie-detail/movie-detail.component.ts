import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import ThemoviedbService from "./../services/themoviedb.service";


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
    providers: [ThemoviedbService]
})
export class MovieDetailComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
