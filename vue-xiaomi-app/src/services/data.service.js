import { get, all } from 'utils/fetch'
import api from 'config/api.conf'

export const getDictList = () => get(api.getDictList, { loading: true })
export const getUserList = (type, page) => get(api.user.list, { params: { type, page } })
export const getProductDetail = (id) => all(
  { url: api.product.detail, config: { loading: true, params: { iid: id } } },
  { url: api.product.category }
)
