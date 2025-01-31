import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/landing/landing.component').then(r => r.LandingComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
    children: [
      {
        path: 'outlet',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
      {
        path: 'men',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
      {
        path: 'woman',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
      {
        path: 'kids',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
      {
        path: 'wear',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
      {
        path: 'foot',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
      {
        path: 'sales',
        loadComponent: () => import('./pages/products/products.component').then(r => r.ProductsComponent),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
