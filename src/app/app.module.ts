import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ThemoviedbComponent } from './themoviedb/themoviedb.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        ThemoviedbComponent,
        MovieDetailComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
