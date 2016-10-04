import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { ThemoviedbComponent } from './themoviedb/themoviedb.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemoviedbComponent,
    MovieDetailsComponent
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
