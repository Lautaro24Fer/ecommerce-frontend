import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/landing/landing.component').then(r => r.LandingComponent)
  },
  {
    path: 'products',
    children: [
      { 
        path: 'all',  
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
      },
      { 
        path: ':type',  
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
      },
      { 
        path: ':type/:category',  
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
      },
      { 
        path: ':type/:category/:genre',  
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
      },
      {
        path: '**',
        redirectTo: '/products/all',
        pathMatch: 'full'
      }
  ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
