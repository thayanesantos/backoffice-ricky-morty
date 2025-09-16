import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(module => module.HomeComponent),
        pathMatch: 'full',

    },
    {
        path: 'favorites',
        loadComponent: () => import('./pages/favorite/favorite.component').then(module => module.FavoriteComponent),
        pathMatch: 'full'
    }
];