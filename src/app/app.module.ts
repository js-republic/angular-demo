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
import { Game2048Component } from './game-2048/game-2048.component';
import { Game2048CaseComponent } from './game-2048-case/game-2048-case.component';
import { TDBtn } from './my-button/my-button.component';
import { UsersComponent } from './users/users.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ThemoviedbComponent,
    MovieDetailsComponent,
    FormComponent,
    MyButtonComponent,
    Game2048Component,
    Game2048CaseComponent,
    TDBtn,
    UsersComponent,
    FormContainerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],

  providers: [
    ThemoviedbService, 
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
