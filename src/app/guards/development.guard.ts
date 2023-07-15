import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const developmentGuard: CanActivateFn = (route, state) => {
  inject(Router).navigateByUrl('developing')
  return false;
};
