import { Vehicle } from '../interfaces/Vehicle'
import { Bicycle } from '../models/Bicycle'
import { VehicleFactory } from './vehicle-factory'

export class BicycleFactory extends VehicleFactory {
  getVehicle (vehicleName: string): Vehicle {
    return new Bicycle(vehicleName)
  }
}
