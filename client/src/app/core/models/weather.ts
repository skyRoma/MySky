export class Wheather {
  constructor(
    readonly clouds: number,
    readonly windSpeed: number,
    readonly rain: boolean,
    readonly snow: boolean,
    readonly temp: number,
    readonly icon: string
  ) {}
}
