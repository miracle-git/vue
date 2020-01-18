import { get } from 'utils/fetch'
import api from 'config/api.conf'

export const getProductDetail = (id) => get(api.product.detail, { params: { iid: id } })
