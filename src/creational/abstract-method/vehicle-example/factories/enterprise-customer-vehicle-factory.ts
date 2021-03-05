import { EnterpriseCustomer } from '../entities/enterprise-customer'
import { CustomerVehicleFactory } from '../interfaces/customer-vehicle-factory'

import { EnterpriseCar } from '../entities/enterprise-car'
import { Customer } from '../interfaces/customer'
import { Vehicle } from '../interfaces/vehicle'

export class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer (name: string): Customer {
    const customer = new EnterpriseCustomer(name)
    return customer
  }

  createVehicle (vehicleName: string, customerName: string): Vehicle {
    const car = new EnterpriseCar(vehicleName, customerName)
    return car
  }
}
