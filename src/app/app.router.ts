import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemoviedbComponent } from './themoviedb/themoviedb.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';


const appRoutes:Routes = [
  { path: '', component: ThemoviedbComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'form', component: FormComponent }
];


export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
