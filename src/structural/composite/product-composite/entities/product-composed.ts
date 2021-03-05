import { ProductComponent } from '../interfaces/product-component'

export class ProductComposed extends ProductComponent {
  constructor (
    private children: ProductComponent[] = []
  ) {
    super()
  }

  getPrice (): number {
    return this.children.reduce(
      (sum, child) => sum + child.getPrice(), 0
    )
  }

  add (...products: ProductComponent[]): void {
    products.forEach(product => this.children.push(product))
  }

  remove (product: ProductComponent): void {
    const productIndex = this.children.indexOf(product)
    if (productIndex >= 0) {
      this.children.splice(productIndex, 1)
    }
  }
}
