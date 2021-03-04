import { ProductB } from '../interfaces/product-b'

export class BookB1 implements ProductB {
  constructor () {
    console.log('BookB1 foi chamado')
  }
}
