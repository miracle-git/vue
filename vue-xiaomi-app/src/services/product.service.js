import { proxyGet } from 'utils/fetch'
import api from 'config/api.conf'

export const getProductList = (categoryId, pageSize) => proxyGet(api.product.list, { loading: true, params: { categoryId, pageSize } })
