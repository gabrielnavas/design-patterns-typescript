import { ProductComponent } from '../interfaces/product-component'

export class ProductLeaf extends ProductComponent {
  constructor (
    public name: string,
    public price:number
  ) {
    super()
  }

  getPrice (): number {
    return this.price
  }
}
