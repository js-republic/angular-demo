/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import ThemoviedbService from './themoviedb.service';


describe('Service: Themoviedb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [ThemoviedbService]
    });
  });

  it('should ...', inject([ThemoviedbService], (service: ThemoviedbService) => {
    expect(service).toBeTruthy();
  }));
});
