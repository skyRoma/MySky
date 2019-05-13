import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input()
  users: User[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
  }

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }
}
