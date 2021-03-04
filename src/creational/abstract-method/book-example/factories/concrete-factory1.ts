import { BookA1 } from '../entities/book-a1'
import { BookB1 } from '../entities/book-b1'
import { AbstractFactory } from '../interfaces/abstract-factory'
import { ProductA } from '../interfaces/product-a'
import { ProductB } from '../interfaces/product-b'

export class ConcreteFactory1 implements AbstractFactory {
  createProductA (): ProductA {
    const bookA1 = new BookA1()
    return bookA1
  }

  createProductB (): ProductB {
    const bookB1 = new BookB1()
    return bookB1
  }
}
