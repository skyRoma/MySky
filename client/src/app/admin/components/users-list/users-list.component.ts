import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/models';

import { UsersListEmitValue, UsersListsButtonName } from './user-lists.types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input()
  users: User[];

  @Output() select: EventEmitter<UsersListEmitValue> = new EventEmitter();

  buttonName = UsersListsButtonName;

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }

  onClick(user: User, buttonName: UsersListsButtonName): void {
    this.select.emit({ user, buttonName });
  }
}
