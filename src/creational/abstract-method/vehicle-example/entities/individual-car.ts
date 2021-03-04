import { Vehicle } from '../interfaces/vehicle'

export class IndividualCar implements Vehicle {
  constructor (
    private readonly name: string,
    private readonly costumerName: string
  ) {}

  pickUp (): void {
    console.log(`O ${this.name} está indo buscar o ${this.costumerName} individual`)
  }
}
