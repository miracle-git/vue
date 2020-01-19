import { get } from 'utils/fetch'
import api from 'config/api.conf'

export const getMultiData = () => get(api.home.multi, { loading: true })
export const getProductsData = (type, page) => get(api.home.products, { params: { type, page } })
