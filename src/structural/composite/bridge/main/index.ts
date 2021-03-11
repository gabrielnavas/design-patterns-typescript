import { Device } from '../interfaces/device'
import { BasicRemoteControl } from '../models/basic-remote-control'
import { Television } from '../models/television'

const main = () => {
  const television: Device = new Television(0, false, [24, 55, 11, 99])
  const basicControl = new BasicRemoteControl(television)
  basicControl.togglePower() // On
  basicControl.togglePower() // Off
}

main()
