import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../core/models';
import { UserService } from '../core/services';

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
