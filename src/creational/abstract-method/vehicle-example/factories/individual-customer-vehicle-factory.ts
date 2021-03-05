import { IndividualCar } from '../entities/individual-car'
import { IndividualCustumer } from '../entities/individual-custumer'
import { Customer } from '../interfaces/customer'
import { CustomerVehicleFactory } from '../interfaces/customer-vehicle-factory'
import { Vehicle } from '../interfaces/vehicle'

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer (name: string): Customer {
    const customer = new IndividualCustumer(name)
    return customer
  }

  createVehicle (vehicleName: string, customerName: string): Vehicle {
    const car = new IndividualCar(vehicleName, customerName)
    return car
  }
}
