import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../core/services';
import { User } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolverService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Observable<never> {
    const id = route.paramMap.get('id');
    return this.userService.getUser(id);
  }
}
