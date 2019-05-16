import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
} from '@angular/router';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: [
    './user-info.component.scss',
    '../../../profile/pages/profile-view/profile-view.component.scss',
    '../../../profile/profile.module.scss',
  ],
  host: { class: 'half-page' },
})
export class UserInfoComponent {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getUser();
      }
    });
  }

  onToggleChange(event) {
    console.log(event);
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.parent.parent.data.subscribe(
      ({ users }: { users: User[] }) => {
        this.user = users.find(user => user.id === id);
      }
    );
  }

  removeUser() {
    this.userService.deleteUser(this.user.id).subscribe((user: User) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  assignAdminRole() {
    this.userService
      .updateUser(this.user.id, { roleId: 1 })
      .subscribe((user: User) => {
        this.user = user;
      });
  }
}
