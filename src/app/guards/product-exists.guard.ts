import { CanActivateFn, Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { Product } from '../models/product';

export const productExistsGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);

  const productIdInUrl = route.paramMap.get(':id');

  if(!productIdInUrl || productIdInUrl === ''){
    router.parseUrl('/404');
  }

  const productFound: Product | undefined = getProductById(Number(productIdInUrl));
  
  if(!productFound){
    router.parseUrl('/404');
  }

  return true;
};

const getProductById = (id: number): Product | undefined => {

  const dataService: MockDataService = inject(MockDataService);
  const product: Product | undefined = dataService.getMockedData().find(p => p.id === id);
  return product;
}