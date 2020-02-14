export default {
  cartLength(state) {
    return state.cartList.length
  },
  checkedLength(state) {
    return state.cartList.filter(item => item.checked).length
  },
  checkedAll(state) {
    return !state.cartList.some(item => !item.checked)
  },
  totalPrice(state) {
    return state.cartList.filter(item => item.checked)
      .reduce((total, item) => total + item.price * item.count, 0)
      .toFixed(2)
  }
}
