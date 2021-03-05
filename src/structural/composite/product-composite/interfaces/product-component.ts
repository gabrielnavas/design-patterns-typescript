export abstract class ProductComponent {
  constructor (public id: string) {}

   abstract getPrice(): number

   add (product: ProductComponent): void {}
   remove (product: ProductComponent): void {}
}
