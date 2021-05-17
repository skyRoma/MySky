import { UserRole, UserRoleName } from './user-info.types';

export const USER_ROLES: UserRole[] = [
  { id: 1, name: UserRoleName.Admin },
  { id: 2, name: UserRoleName.Client },
  { id: 3, name: UserRoleName.Sportsman },
];
