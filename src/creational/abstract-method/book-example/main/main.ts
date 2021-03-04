import { ConcreteFactory1 } from '../factories/concrete-factory1'
import { ConcreteFactory2 } from '../factories/concrete-factory2'

const main = () => {
  const factoryBook1 = new ConcreteFactory1()
  const bookA1 = factoryBook1.createProductA() // Its will log "BookA1 foi chamado"
  const BookB1 = factoryBook1.createProductB() // Its will log "BookB1 foi chamado"

  const factoryBook2 = new ConcreteFactory2()
  const bookA2 = factoryBook2.createProductA() // Its will log "BookA2 foi chamado"
  const BookB2 = factoryBook2.createProductB() // Its will log "BookB2 foi chamado"
}

main()
