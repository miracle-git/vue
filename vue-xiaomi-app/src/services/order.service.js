import { http } from 'utils/fetch'
import api from 'config/api.conf'

export const getAddressList = () => http.proxy.get(api.address.list)
export const createAddress = (data) => http.proxy.post(api.address.add, { params: { ...data } })
export const updateAddress = (id, data) => http.proxy.put(api.address.edit.replace(/{id}/, id), { params: { ...data } })
export const deleteAddress = (id) => http.proxy.del(api.address.del.replace(/{id}/, id))
export const createOrder = (id) => http.proxy.post(api.order.add, { params: { shippingId: id } })
