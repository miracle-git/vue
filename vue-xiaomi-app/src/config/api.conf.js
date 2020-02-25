import { getDataApi } from 'm2-core'

export default getDataApi({
  product: {
    list: '/products'
  },
  cart: {
    add: '/carts',
    num: '/carts/products/sum'
  },
  user: {
    info: '/user',
    login: '/user/login',
    register: '/user/register'
  }
}, '/api')
