import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models';

import { UsersListEmitValue } from '../../components/users-list/user-lists.types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.parent.data.subscribe(({ users }: { users: User[] }) => {
      this.users = users;
      this.cdr.detectChanges();
    });
  }

  navigate(event: UsersListEmitValue): void {
    this.router.navigate([`admin/users/${event.user.id}`]);
  }
}
