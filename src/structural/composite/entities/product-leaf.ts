import { ProductComponent } from '../interfaces/product-component'

export class ProductLeaf extends ProductComponent {
  constructor (
    public id: string,
    public name: string,
    public price:number
  ) {
    super(id)
  }

  getPrice (): number {
    return this.price
  }
}
