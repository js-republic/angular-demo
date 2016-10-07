import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';
import { AppComponent } from './app.component';
import { ThemoviedbComponent } from './themoviedb/themoviedb.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

import ThemoviedbService from './services/themoviedb.service';
import UsersService from './services/users.service';
import { FormComponent } from './form/form.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { TDBtn } from './my-button/my-button.component';
import { UsersComponent } from './users/users.component';
import { FormContainerComponent } from './form-container/form-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemoviedbComponent,
    MovieDetailsComponent,
    FormComponent,
    MyButtonComponent,
    TDBtn,
    UsersComponent,
    FormContainerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  providers: [
    ThemoviedbService, 
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
