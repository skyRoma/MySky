import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from '../services';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const tokenPayload = this.authService.getDecodedToken();

    if (
      this.authService.isAuthTokenExpired() ||
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
