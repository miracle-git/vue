import { getDataApi } from 'm2-core'

export default getDataApi({
  product: {
    list: '/products'
  },
  cart: {
    add: '/carts'
  }
}, '/api')
