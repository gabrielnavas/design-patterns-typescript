import { Device } from '../interfaces/device'
import { RemoteControl } from '../interfaces/remote-control'

export class TouchRemoteControl extends RemoteControl {
  constructor (protected device: Device) {
    super(device)
  }

  togglePower (): void {
    this.device.togglePower()
  }

  isPowerOn () {
    return this.device.getPowerLevel() > 0
  }

  handleAreaTouch (height: number, width: number) {
    if (height === 20 && width === 20) {
      this.device.powerOn()
    } else if (height === 20 && width === 40) {
      this.device.powerOff()
    }
  }
}
