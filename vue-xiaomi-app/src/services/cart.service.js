import { http } from 'utils/fetch'
import api from 'config/api.conf'

export const addToCart = (id) => http.proxy.post(api.cart.add, { params: { id } })
