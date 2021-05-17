import { Jump, Role } from '.';

export class User {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly role: Role,
    readonly jumps: Jump[],
    readonly phoneNumber?: string
  ) {}
}
