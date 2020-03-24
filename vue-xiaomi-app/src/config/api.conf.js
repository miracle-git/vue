import { getDataApi } from 'm2-core'

export default getDataApi({
  product: {
    list: '/products',
    info: '/products/{id}'
  },
  cart: {
    add: '/carts',
    num: '/carts/products/sum',
    list: '/carts',
    select: '/carts/selectAll',
    unSelect: '/carts/unSelectAll',
    update: '/carts/{pid}',
    delete: '/carts/{pid}'
  },
  user: {
    info: '/user',
    login: '/user/login',
    logout: '/user/logout',
    register: '/user/register'
  }
}, '/api')
