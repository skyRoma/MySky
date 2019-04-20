export class Jump {
  constructor(
    readonly index: number,
    readonly date: string,
    readonly exercise: string,
    readonly parachute: ExerciseType,
    readonly aircrafType: string,
    readonly height: number,
    readonly freeFallTime: number,
    readonly result: string
  ) {}
}

export enum ExerciseType {
  accuracy = 'Точность',
  acrobatics = 'Акробатика',
}
