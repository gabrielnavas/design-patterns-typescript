import { Device } from '../interfaces/device'

export class Radio extends Device {
  private stationsNowIndex = 0

  constructor (
    protected powerLevel: number,
    protected power: boolean,
    private stations: number[]
  ) {
    super(powerLevel, power)
    if (stations.length === 0) {
      throw new Error('at least one channel is required')
    }
  }

  handleStation (station: number): void {
    const indexStationFound = this.stations.indexOf(station)
    if (indexStationFound >= 0) {
      this.stationsNowIndex = indexStationFound
    }
  }

  addStation (station: number): void {
    this.stations.push(station)
  }

  setPowerLevel (power: number): void {
    if (power >= 0 && power <= 100) {
      this.powerLevel = power
    }
  }

  getPowerLevel (): number {
    return this.powerLevel
  }

  powerOn (): void {
    this.setPowerLevel(100)
  }

  powerOff (): void {
    this.setPowerLevel(0)
  }
}
