/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';

import { ThemoviedbComponent } from './themoviedb.component';


describe('Component: Themoviedb', () => {
  /* CONFIGURATION */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThemoviedbComponent
      ],
    });
  });

  /* TESTS */
  it('should create an instance', () => {
    let component = new ThemoviedbComponent(undefined);
    expect(component).toBeTruthy();
  });

  it('should not have any searchName', () => {
    let component = new ThemoviedbComponent();
    expect(component.searchName).toBe(undefined);
  });

  it('should update the searchName', () => {
    let component         = new ThemoviedbComponent();
    component.searchName  = 'test';

    expect(component.searchName).toEqual('test');
  });
});
