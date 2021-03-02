import { Vehicle } from '../interfaces/Vehicle'

export class Car implements Vehicle {
  constructor (
    private name: string
  ) { }

  pickUp (customerName: string): void {
    console.log(`${this.name} está buscando ${customerName} de carro!!`)
  }

  stop (): void {
    console.log(`O carro do ${this.name} parou!!`)
  }
}
