import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RouterService } from '../services/router.service';

export const routeExistsGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const routerService: RouterService = inject(RouterService);

  const currentSlug: any = route.paramMap.get('slug');

  if(!currentSlug){
    return router.parseUrl('/404');
  }
  if(!routerService.isValidSlug(currentSlug)){
    const validSlug: string = routerService.getFather(currentSlug);
    if(validSlug === ''){
      return router.parseUrl('/404');
    }
    return router.parseUrl(validSlug);
  }

  return true;
};
