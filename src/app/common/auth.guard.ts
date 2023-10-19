import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice:AuthService=inject(AuthService);
  const router:Router=inject(Router);

  if(authservice.isLoggedIn()){
    return true;
  }

  router.navigate(['/login']);
  return false;
};
