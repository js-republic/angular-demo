/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ThemoviedbComponent } from './themoviedb.component';

describe('Component: Themoviedb', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ThemoviedbComponent
            ],
        });
    });


    it('should create an instance', () => {
        let component = new ThemoviedbComponent();
        expect(component).toBeTruthy();
    });

    /*
        it(`should have as title 'app works!'`, async(() => {
            let fixture = TestBed.createComponent(AppComponent);
            let app = fixture.debugElement.componentInstance;
            expect(app.title).toEqual('app works!');
        }));
     */
});
