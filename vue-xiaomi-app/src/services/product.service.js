import http from 'utils/http'
import api from 'config/api.conf'

export const getProductList = (categoryId, pageSize) => http.proxy.get(api.product.list, { loading: true, params: { categoryId, pageSize } })
export const getProductInfo = (id) => http.proxy.get(api.product.info.replace(/{id}/, id), { loading: true })
