export class User {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly role: string,
    readonly phoneNumber?: string
  ) {}
}
