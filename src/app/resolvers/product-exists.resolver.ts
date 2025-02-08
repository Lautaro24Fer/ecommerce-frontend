import { ResolveFn, Router } from '@angular/router';
import { MockDataService } from '../services/mock-data.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../models/product';

export const productExistsResolver: ResolveFn<boolean | Product> = (route, state) => {
  
  const dataService: MockDataService = inject(MockDataService);
  const router: Router = inject(Router)

  const id = route.paramMap.get('id');

  if(!id || id === ''){
    router.parseUrl('/404')
    return of(false);
  }

  const product = dataService.getMockedData().find(r => r.id === +id);

  if(!product){
    router.parseUrl('/404')
    return of(false);
  }

  return of(product);
};
