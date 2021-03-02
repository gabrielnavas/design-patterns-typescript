import { Vehicle } from '../interfaces/Vehicle'

export class Bicycle implements Vehicle {
  constructor (
    private name: string
  ) { }

  pickUp (customerName: string): void {
    console.log(`${this.name} está buscando ${customerName} de bike!!`)
  }

  stop (): void {
    console.log(`A bike do ${this.name} parou!`)
  }
}
