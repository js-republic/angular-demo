import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {ThemoviedbComponent} from "./themoviedb/themoviedb.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const appRoutes:Routes = [
    { path: '', component: ThemoviedbComponent },
    { path: 'movie/:id', component: MovieDetailsComponent }
];


export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
