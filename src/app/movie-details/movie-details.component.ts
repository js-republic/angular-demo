import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import ThemoviedbService from "../services/themoviedb.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [ThemoviedbService]
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  errorMessage: string;

  constructor(
    private movieDbService: ThemoviedbService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.getMovie(id);
      });
    }

    getMovie(movieId: number) {
      this.movieDbService.getMovieById(movieId)
      .subscribe(movie => this.movie = movie,
                 error =>  this.errorMessage = <any>error);
    }

}
