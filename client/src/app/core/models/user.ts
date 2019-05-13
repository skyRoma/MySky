export class User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly role: string,
    readonly phoneNumber?: string
  ) {}
}
