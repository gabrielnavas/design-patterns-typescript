export abstract class Device {
  constructor (
    protected powerLevel: number,
    protected power: boolean
  ) {}

  abstract setPowerLevel(power: number): void
  abstract getPowerLevel(): number
  abstract powerOn(): void
  abstract powerOff(): void
  togglePower () {
    this.power = !this.power
  }
}
