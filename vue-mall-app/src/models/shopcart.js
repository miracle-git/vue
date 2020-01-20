import { DataType } from 'm2-core'

export class ShopCartModel {
  constructor(topImages, product) {
    this.id = product.iid
    this.image = DataType.isEmptyArray(topImages) ? '' : topImages[0]
    this.title = product.title
    this.desc = product.desc
    this.price = product.realPrice
  }
}
