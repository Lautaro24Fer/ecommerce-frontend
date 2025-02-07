import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeExistsGuard } from './route-exists.guard';

describe('routeExistsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
