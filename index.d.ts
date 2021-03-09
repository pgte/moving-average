
export function MovingAverage (timespan:number): MovingAverage
export interface MovingAverage {
  variance: () => number
  movingAverage: () => number

  deviation: () => number
  forecast: () => number

  push: (time: number, value: number) => void
}
export = MovingAverage
