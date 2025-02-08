import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productExistsResolver } from './product-exists.resolver';

describe('productExistsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productExistsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
