import { Vehicle } from './vehicle'
import { Customer } from './customer'

export interface CustomerVehicleFactory {
  createCustomer(name: string): Customer
  createVehicle(vehicleName: string, customerName: string): Vehicle
}
