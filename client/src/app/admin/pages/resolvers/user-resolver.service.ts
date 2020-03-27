import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService implements Resolve<User[]> {
  constructor(private userService: UserService) {}

  resolve(): Observable<User[]> | Observable<never> {
    return this.userService.getUsers();
  }
}
