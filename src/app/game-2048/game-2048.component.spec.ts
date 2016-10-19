/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Game2048Component } from './game-2048.component';

describe('Component: Game2048', () => {
  let component,
    keyEvent = (key) => {
      let event = document.createEvent('KeyboardEvent');
      event.keyCode = key;
      event.initEvent('keydown');
      return event;
    };

  beforeEach(() => {
    component = new Game2048Component();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should create 2 game case when initialized', () => {
    component.ngOnInit();

    window.setTimeout(() => {
      let cases = component.data.filter((x) => { return x.filter(y => !!y); });
      expect(cases.length).toBe(2);
    }, 500);
  });

  it('should have at least 1 case from the left with a value with slideleft', () => {
    component.ngOnInit();
    component.slideLeft();

    window.setTimeout(() => {
      let cases = component.data.filter((x) => !!x[0]);
      expect(cases.length).not.toBeLessThan(1);
    }, 700);
  });

  it('should have at least 1 case from the right with a value with slideright', () => {
    component.ngOnInit();
    component.slideRight();

    window.setTimeout(() => {
      let cases = component.data.filter((x) => !!x[x.length - 1]);
      expect(cases.length).not.toBeLessThan(1);
    }, 700);
  });

  it('should have at least 1 case from the top with a value with slidetop', () => {
    component.ngOnInit();
    component.slideUp();

    window.setTimeout(() => {
      let cases = component.data[0].filter(x => !!x);
      expect(cases.length).not.toBeLessThan(1);
    }, 700);
  });

  it('should have at least 1 case from the bottom with a value with slidetop', () => {
    component.ngOnInit();
    component.slideDown();

    window.setTimeout(() => {
      let cases = component.data[component.data.length - 1].filter(x => !!x);
      expect(cases.length).not.toBeLessThan(1);
    }, 700);
  });

  it('should have no direction if there is no keyboard event', () => {
    expect(component.key).toBeUndefined();
  });

  it('should make correct direction with keyboard event', () => {
    component.onKeydown(keyEvent('LEFT'));

    window.setTimeout(() => {
      expect(component.key).toBe(component.directions.LEFT);
    }, 500);
  });

  it('should change the key if two keyboard event are not the same', () => {
    component.onKeydown(keyEvent('LEFT'));

    window.setTimeout(() => {
      expect(component.key).toBe(component.directions.LEFT);

      component.onKeydown(keyEvent('RIGHT'));
      expect(component.key).toBe(component.directions.RIGHT);

      component.onKeyUp();
      expect(component.key).toBe('');
    }, 500);
  });
});