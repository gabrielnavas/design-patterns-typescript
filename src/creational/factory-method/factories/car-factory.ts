import { Vehicle } from '../interfaces/Vehicle'
import { Car } from '../models/Car'
import { VehicleFactory } from './vehicle-factory'

export class CarFactory extends VehicleFactory {
  getVehicle (vehicleName: string): Vehicle {
    return new Car(vehicleName)
  }
}
