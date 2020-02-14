import { SHOP_CART_TYPES } from './types'

export default {
  [SHOP_CART_TYPES.ADD_TO_CART](state, payload) {
    // 1. 首选查找是否存在对应商品
    const product = state.cartList.find(item => item.id === payload.id)
    // 2. 如果找到，则将数量加1，否则将当前商品数量置为1并添加到购物车
    if (product) {
      product.count++
    } else {
      payload.checked = true
      payload.count = 1
      state.cartList.push(payload)
    }
  }
}
