import { Device } from '../interfaces/device'
import { RemoteControl } from '../interfaces/remote-control'

export class BasicRemoteControl extends RemoteControl {
  constructor (protected device: Device) {
    super(device)
  }

  togglePower (): void {
    this.device.togglePower()
  }
}
