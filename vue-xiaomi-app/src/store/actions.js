import { SAVE_USER_INFO, SAVE_CART_NUM } from './types'

export default {
  saveUserInfo(context, payload) {
    context.commit(SAVE_USER_INFO, payload)
  },
  saveCartNum(context, payload) {
    context.commit(SAVE_CART_NUM, payload)
  }
}
