import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/landing/landing.component').then(r => r.LandingComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(r => r.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(r => r.ContactComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
