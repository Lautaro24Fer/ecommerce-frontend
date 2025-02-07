import { Routes } from '@angular/router';
import { routeExistsGuard } from './guards/route-exists.guard';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/landing/landing.component').then(r => r.LandingComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(r => r.NotFoundComponent)
  },
  {
    path: 'products',
    children: [
      { 
        path: ':slug',  
        canActivate: [routeExistsGuard],
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
      }
  ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
