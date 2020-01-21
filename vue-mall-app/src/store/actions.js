import { SHOP_CART_TYPES } from './types'

export default {
  addToCart(context, payload) {
    context.commit(SHOP_CART_TYPES.ADD_TO_CART, payload)
  },
  addToCartAsync(context, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit(SHOP_CART_TYPES.ADD_TO_CART, payload)
        resolve('成功加入购物车')
      }, 500)
    })
  }
}
