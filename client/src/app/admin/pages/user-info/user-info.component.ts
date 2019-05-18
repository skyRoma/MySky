import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

import { USER_ROLES } from './user-info-config';
import { UserRoleName } from './user-info.types';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: [
    './user-info.component.scss',
    '../../../profile/pages/profile-view/profile-view.component.scss',
    '../../../profile/profile.module.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'half-page user-info' },
})
export class UserInfoComponent {
  user: User;

  userRoleId: number;

  userRoles = USER_ROLES;

  subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    this.subs.push(
      router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.getUser();
        }
      })
    );
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subs.push(
      this.route.parent.parent.data.subscribe(
        ({ users }: { users: User[] }) => {
          this.user = users.find(user => user.id === id);
          this.userRoleId = this.userRoles.filter(role => {
            return role.name === (this.user.role as UserRoleName);
          })[0].id;
          this.cdr.detectChanges();
        }
      )
    );
  }

  removeUser(): void {
    this.userService.deleteUser(this.user.id).subscribe((user: User) => {
      this.subs.forEach(sub => sub.unsubscribe());
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  changeRole(roleId: number): void {
    this.userService
      .updateUser(this.user.id, { roleId })
      .subscribe((user: User) => {
        this.user = user;
      });
  }
}
