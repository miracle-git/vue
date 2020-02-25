import { SAVE_USER_INFO, SAVE_CART_NUM } from './types'

export default {
  [SAVE_USER_INFO](state, payload) {
    state.userName = payload
  },
  [SAVE_CART_NUM](state, payload) {
    state.cartNum = payload
  }
}
