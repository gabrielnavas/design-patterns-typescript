import { ProductComposed } from '../entities/product-composed'
import { ProductLeaf } from '../entities/product-leaf'

const main = () => {
  const pen = new ProductLeaf('1', 'Pen', 1)
  const smarthphone = new ProductLeaf('2', 'Smarthphone', 1_000)
  const shirt = new ProductLeaf('3', 'Shirt', 40)
  const productBox = new ProductComposed('4')

  productBox.add(pen, smarthphone, shirt)
  productBox.remove(pen)

  const otherProductBox = new ProductComposed('6')
  otherProductBox.add(productBox)

  const sum = otherProductBox.getPrice()

  console.log('sum: ', sum) // 1040
}

main()
