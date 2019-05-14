import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
} from '@angular/router';
import { User } from 'src/app/core/models';

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

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.assignUser();
      }
    });
  }

  assignUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.parent.parent.data.subscribe(
      ({ users }: { users: User[] }) => {
        this.user = users.find(user => user.id === id);
      }
    );
  }
}
