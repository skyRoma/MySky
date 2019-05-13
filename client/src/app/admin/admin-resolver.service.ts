import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../core/models';
import { UserService } from '../core/services';

@Injectable({
  providedIn: 'root',
})
export class AdminResolverService implements Resolve<User[]> {
  constructor(private userService: UserService) {}

  resolve(): Observable<User[]> | Observable<never> {
    return this.userService.getUsers();
  }
}
