import { BicycleFactory } from '../factories/bicycle-factory'
import { CarFactory } from '../factories/car-factory'

function main () {
  const carFactory = new CarFactory()
  const car = carFactory.getVehicle('John')
  car.pickUp('Mary')

  const bicycleFactory = new BicycleFactory()
  const bicicle = bicycleFactory.getVehicle('Jerry')
  bicicle.pickUp('Ana')
}

main()
