import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import ThemoviedbService from "../services/themoviedb.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


const animations = [
  trigger('imgSlideIn', [
    state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', [
      style({opacity: 0, transform: 'translateX(-100%)'}),
      animate('600ms cubic-bezier(0, .84, .14, .99)')
    ]),
  ]),

  trigger('detailsFadeIn', [ 
    state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', [
      style({opacity: 0}),
      animate('600ms 100ms ease-out')
    ]),
  ]),

  trigger('imgDisplayed', [
    state('false', style({ opacity: 0, width: 0 })),
    state('true', style({ opacity: 1, width: '300px' })),
    transition('* <=> *', animate('.5s cubic-bezier(0.19, 1, 0.22, 1)')),
  ])
]


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [ThemoviedbService],
  animations,
})
export class MovieDetailsComponent implements OnInit {

  private movie: Movie;
  private errorMessage: string;
  @Input() isImgDisplayed: boolean = true;

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

    toggleImg() {
      this.isImgDisplayed = !this.isImgDisplayed;
    }

}
