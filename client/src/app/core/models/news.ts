import { User } from './user';

export class News {
  constructor(
    readonly id: number,
    readonly author: User,
    readonly content: string,
    readonly createdAt: Date
  ) {}
}
