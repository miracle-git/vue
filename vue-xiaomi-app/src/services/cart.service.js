import { http } from 'utils/fetch'
import api from 'config/api.conf'

export const addToCart = (id) => http.proxy.post(api.cart.add, { params: { id, selected: true } })
export const getCartList = () => http.proxy.get(api.cart.list, { loading: true })
export const selectAll = (checked) => http.proxy.put(checked ? api.cart.unSelect : api.cart.select)
export const updateCart = (id, quantity, selected) => http.proxy.put(api.cart.update.replace(/{pid}/, id), { params: { quantity, selected } })
export const deleteCart = (id) => http.proxy.del(api.cart.delete.replace(/{pid}/, id))
