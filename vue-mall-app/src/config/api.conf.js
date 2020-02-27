import { getDataApi } from 'm2-core'

export default getDataApi({
  home: {
    multi: '/home/multidata',
    list: '/home/data'
  },
  product: {
    detail: '/detail',
    recommend: '/recommend'
  },
  category: {
    all: '/category',
    sub: '/subcategory',
    detail: '/subcategory/detail'
  }
}, '/api/wh')
