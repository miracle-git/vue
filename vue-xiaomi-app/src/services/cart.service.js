import { proxyPost } from 'utils/fetch'
import api from 'config/api.conf'

export const addToCart = (id) => proxyPost(api.cart.add, { params: { id } })
