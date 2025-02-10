import { Routes } from '@angular/router';
import { routeExistsGuard } from './guards/route-exists.guard';
import { productExistsResolver } from './resolvers/product-exists.resolver';


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
    path: 'product',
    children: [
      {
        path: ':id',
        resolve: { product: productExistsResolver },
        loadComponent: () => import('./pages/product/product.component').then(r => r.ProductComponent)
      }
    ]
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
];
