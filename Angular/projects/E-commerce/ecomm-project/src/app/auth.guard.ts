import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from './services/seller.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService)
  const router = inject(Router)

  return sellerService.isSellerLoggedIn.pipe(map( isLoggedIn => {
    return isLoggedIn;
  } ));
};
