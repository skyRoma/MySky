export class MysToken {
  constructor(
    readonly sub: string,
    readonly iat: number,
    readonly exp: number,
    readonly role: string,
    readonly id: string
  ) {}
}
