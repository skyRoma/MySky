export class User {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly password: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly token: string
  ) {}
}
