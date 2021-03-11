import { Device } from './device'

export abstract class RemoteControl {
  constructor (
    protected readonly device: Device
  ) {}

  abstract togglePower (): void
}
