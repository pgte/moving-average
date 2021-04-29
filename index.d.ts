declare namespace MovingAverage {
  export interface IMovingAverage {
    variance: () => number
    movingAverage: () => number

    deviation: () => number
    forecast: () => number

    push: (time: number, value: number) => void
  }
}

declare function MovingAverage(timespan: number): MovingAverage.IMovingAverage

export = MovingAverage
