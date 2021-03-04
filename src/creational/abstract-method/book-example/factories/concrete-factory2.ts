import { BookA2 } from '../entities/book-a2'
import { BookB2 } from '../entities/book-b2'
import { AbstractFactory } from '../interfaces/abstract-factory'
import { ProductA } from '../interfaces/product-a'
import { ProductB } from '../interfaces/product-b'

export class ConcreteFactory2 implements AbstractFactory {
  createProductA (): ProductA {
    const bookA2 = new BookA2()
    return bookA2
  }

  createProductB (): ProductB {
    const bookB2 = new BookB2()
    return bookB2
  }
}
