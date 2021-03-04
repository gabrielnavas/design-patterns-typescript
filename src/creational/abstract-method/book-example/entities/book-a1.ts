import { ProductA } from '../interfaces/product-a'

export class BookA1 implements ProductA {
  constructor () {
    console.log('BookA1 foi chamado')
  }
}
