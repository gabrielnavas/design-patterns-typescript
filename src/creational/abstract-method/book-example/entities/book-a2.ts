import { ProductA } from '../interfaces/product-a'

export class BookA2 implements ProductA {
  constructor () {
    console.log('BookA2 foi chamado')
  }
}
