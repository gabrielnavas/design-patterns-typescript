import { Customer } from '../interfaces/customer'

export class EnterpriseCustomer implements Customer {
  constructor (public readonly name: string) {}
}
