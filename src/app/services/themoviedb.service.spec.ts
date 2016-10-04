/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Response } from '@angular/http';

import ThemoviedbService from './themoviedb.service';


describe('Service: Themoviedb', () => {
  /* CONFIGURATION */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ThemoviedbService]
    });
  });

  /* TESTS */
  it('should be valid', inject([ThemoviedbService], (service: ThemoviedbService) => {
    expect(service).toBeTruthy();
  }));

  it('should return movies from api when no page is passed', inject([ThemoviedbService], (service: ThemoviedbService) => {
    service.getMovieTopRated(null, (response: Response) => {
      let data = response.json();
      expect(data.results).not.toEqual(0);
    });
  }));

  it('should not return movies from api when invalid page parameter is passed',
    inject([ThemoviedbService], (service: ThemoviedbService) => {

    service.getMovieTopRated(-64, (response: Response) => {
      let data = response.json();
      expect(data.results).toBe(null);
    });
  }));

  it('should return movies from api when searching with more than 3 characters',
    inject([ThemoviedbService], (service: ThemoviedbService) => {

    service.getMovieBySearching('interstellar', (response: Response) => {
      let data = response.json();
      expect(data.results).not.toEqual(0);
    });
  }));

  it('should not return movies from api when searching with no query',
    inject([ThemoviedbService], (service: ThemoviedbService) => {

    service.getMovieBySearching(null, (response: Response) => {
      let data = response.json();
      expect(data.results).toBe(null);
    });
  }));
});
