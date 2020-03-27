import { User } from 'src/app/core/models';

export interface UsersListEmitValue {
  user: User;
  buttonName: UsersListsButtonName;
}

export enum UsersListsButtonName {
  personalData = 'Персональные данные',
  jumps = 'Прыжки',
}
