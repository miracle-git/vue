import { getDataApi } from 'm2-core'

export default getDataApi({
  product: {
    list: '/products',
    info: '/products/{id}'
  },
  cart: {
    add: '/carts?new=1&xx=2',
    num: '/carts/products/sum',
    list: '/carts',
    select: '/carts/selectAll',
    unSelect: '/carts/unSelectAll',
    update: '/carts/{pid}',
    delete: '/carts/{pid}'
  },
  address: {
    list: '/shippings',
    add: '/shippings',
    edit: '/shippings/{id}',
    del: '/shippings/{id}'
  },
  order: {
    add: '/orders'
  },
  user: {
    info: '/user',
    login: '/user/login',
    logout: '/user/logout',
    register: '/user/register'
  }
}, '/api')
