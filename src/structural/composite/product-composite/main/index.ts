import { ProductComposed } from '../entities/product-composed'
import { ProductLeaf } from '../entities/product-leaf'

const main = () => {
  const pen = new ProductLeaf('Pen', 1)
  const smarthphone = new ProductLeaf('Smarthphone', 1_000)
  const shirt = new ProductLeaf('Shirt', 40)
  const productBox = new ProductComposed()

  productBox.add(pen, smarthphone, shirt)
  productBox.remove(pen)

  const otherProductBox = new ProductComposed()
  otherProductBox.add(productBox)

  const sum = otherProductBox.getPrice()

  console.log('sum: ', sum) // 1040
}

main()
