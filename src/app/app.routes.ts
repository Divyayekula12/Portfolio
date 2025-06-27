import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact').then(m => m.Contact)
    },
    {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About)
    },

    {
        path: 'projects',
        loadComponent: () => import('./components/projects/projects').then(m => m.Projects)
    },
    {
        path: 'skills',
        loadComponent: () => import('./components/skills/skills').then(m => m.Skills)
    }
];
