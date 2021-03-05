import { EnterpriseCustomerVehicleFactory } from '../factories/enterprise-customer-vehicle-factory'
import { IndividualCustomerVehicleFactory } from '../factories/individual-customer-vehicle-factory'

const enterpriseCustomerVehicleFactory = new EnterpriseCustomerVehicleFactory()
const individualCustomerVehicleFactory = new IndividualCustomerVehicleFactory()

const carEnterprise = enterpriseCustomerVehicleFactory.createVehicle('Ferrari', 'João')
const customerEnterprise = enterpriseCustomerVehicleFactory.createCustomer('João')

const carIndividual = individualCustomerVehicleFactory.createVehicle('Fusca', 'Maria')
const customerIndividual = individualCustomerVehicleFactory.createCustomer('Maria')
