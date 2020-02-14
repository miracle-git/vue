import { getDataApi } from 'm2-core'

export default getDataApi({
  getDictList: '/dict/list',
  getDataList: '/home/data_list',
  getDataItem: '/home/data_item',
  user: {
    list: '/user/list',
    detail: '/user/detail'
  },
  product: {
    list: '/product/list',
    detail: '/product/detail',
    category: '/product/category'
  }
}, '/api', [
  '/user/list',
  '/product/detail'
])
