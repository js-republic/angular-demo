import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ThemoviedbComponent} from './themoviedb/themoviedb.component';


const appRoutes: Routes = [
    { path: '', component: ThemoviedbComponent }
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);