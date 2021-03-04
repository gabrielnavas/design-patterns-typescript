import { Customer } from '../interfaces/customer'

export class IndividualCustumer implements Customer {
  constructor (public name: string) {}
}
