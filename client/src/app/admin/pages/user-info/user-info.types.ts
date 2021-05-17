export interface UserRole {
  id: number;
  name: UserRoleName;
}

export enum UserRoleName {
  Admin = 'Администратор',
  Client = 'Клиент',
  Sportsman = 'Cпортсмен',
}
