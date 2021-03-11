import { Device } from '../interfaces/device'
import { BasicRemoteControl } from '../models/basic-remote-control'
import { Radio } from '../models/radio'
import { Television } from '../models/television'
import { TouchRemoteControl } from '../models/touch-remote-control'

const mainTelevision = () => {
  const television: Device = new Television(0, false, [24, 55, 11, 99])
  const basicControl = new BasicRemoteControl(television)
  basicControl.togglePower() // On
  basicControl.togglePower() // Off
}

const mainRadio = () => {
  const radio: Device = new Radio(0, false, [24, 55, 11, 99])
  const touchRemoteControl = new TouchRemoteControl(radio)
  touchRemoteControl.togglePower() // On
  touchRemoteControl.handleAreaTouch(20, 20)
  const isPowerOne = touchRemoteControl.isPowerOn()
  console.log(isPowerOne) // true
}

mainRadio()
mainTelevision()
