import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemoviedbComponent } from './themoviedb/themoviedb.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormComponent } from './form/form.component';
import { Game2048Component } from './game-2048/game-2048.component';


const appRoutes:Routes = [
  { path: '', component: ThemoviedbComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'form', component: FormComponent },
  { path: '2048', component: Game2048Component }
];


export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
