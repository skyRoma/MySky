export class Jump {
  constructor(
    readonly index: number,
    readonly date: Date,
    readonly exercise: ExerciseType,
    readonly parachute: string,
    readonly aircrafType: string,
    readonly height: number,
    readonly freeFallTime: number,
    readonly result: number,
    readonly userId: number
  ) {}
}

export enum ExerciseType {
  accuracy = 'Точность',
  acrobatics = 'Акробатика',
}
