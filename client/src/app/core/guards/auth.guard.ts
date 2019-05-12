import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkAuth(state);
  }

  canLoad(route: Route): boolean {
    const state = this.router.routerState.snapshot;
    return this.checkAuth(state);
  }

  private checkAuth(state: RouterStateSnapshot): boolean {
    if (this.auth.isAuthTokenExpired()) {
      this.router.navigate(['/auth/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
    return true;
  }
}
