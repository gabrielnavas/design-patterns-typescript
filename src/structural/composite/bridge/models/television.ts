import { Device } from '../interfaces/device'

export class Television extends Device {
  private channelNowIndex = 0

  constructor (
    protected powerLevel: number,
    protected power: boolean,
    private channels: number[]
  ) {
    super(powerLevel, power)
    if (channels.length === 0) {
      throw new Error('at least one channel is required')
    }
  }

  handleChannel (channel: number): void {
    const indexChannelFound = this.channels.indexOf(channel)
    if (indexChannelFound >= 0) {
      this.channelNowIndex = indexChannelFound
    }
  }

  addChannel (channel: number): void {
    this.channels.push(channel)
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
