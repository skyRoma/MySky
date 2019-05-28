import { Aircraft, Exercise, Parachute } from '.';

export class Jump {
  constructor(
    readonly id: number,
    readonly date: Date,
    readonly exercise: Exercise,
    readonly parachute: Parachute,
    readonly aircraft: Aircraft,
    readonly height: number,
    readonly freeFallTime: number,
    readonly result: number,
    readonly userId: number
  ) {}
}

export enum ExerciseType {
  accuracy = 'Точность',
  acrobatics = 'Акробатика',
  tandem = 'Тандем',
  airForce = 'Десантный',
}
