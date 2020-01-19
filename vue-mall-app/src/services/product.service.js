import { all } from 'utils/fetch'
import api from 'config/api.conf'

export const getProductDetail = (id) => all(
  { url: api.product.detail, config: { loading: true, params: { iid: id } } },
  { url: api.product.recommend }
)
