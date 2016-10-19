/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game2048CaseComponent } from './game-2048-case.component';


describe('Component: Game2048Case', () => {
  let comp: Game2048CaseComponent,
    fixture: ComponentFixture<Game2048CaseComponent>,
    de: DebugElement;

  // Async beforeEach
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2048CaseComponent ]
    }).compileComponents();
  });

  // Sync beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(Game2048CaseComponent);
    comp    = fixture.componentInstance;
    de      = fixture.debugElement.query(By.css('.app-game-2048-case'));

    fixture.detectChanges();
  });


  it('should create an instance', () => {
    let component = new Game2048CaseComponent();
    expect(component).toBeTruthy();
  });

  it('should be created with value 0', () => {
    expect(comp.value).toBeUndefined();
  });

  it('should have text color black when created', () => {
    expect(comp.getFontColorByValue()).toBe('black');
  });

  it('should have text white when value is equal to 8', () => {
    expect(comp.getFontColorByValue(8)).toBe('white');
  });

  it('should have have default background when created', () => {
    expect(comp.getBackgroundColorByValue()).toBe(comp.backgroundColors[0]);
  });

  it('should be synchronized with it background colors', () => {
    expect(comp.getBackgroundColorByValue(32)).toBe(comp.backgroundColors[32]);
  });
});
