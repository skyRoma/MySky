import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
} from '@angular/router';

import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkRole(route);
  }

  canLoad(route: Route): boolean {
    return this.checkRole(route);
  }

  private checkRole(route: Route | ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const tokenPayload = this.authService.getDecodedToken();
    if (tokenPayload.role !== expectedRole) {
      return false;
    }
    return true;
  }
}
