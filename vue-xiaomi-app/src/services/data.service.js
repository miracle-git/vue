import http from 'utils/http'
import api from 'config/api.conf'

export const getDictList = () => http.get(api.getDictList, { loading: true })
export const getUserList = (type, page) => http.get(api.user.list, { params: { type, page } })
export const getAppData = () => http.proxy.all({ url: api.user.info }, { url: api.cart.num })
