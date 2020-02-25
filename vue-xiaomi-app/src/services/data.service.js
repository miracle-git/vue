import { get, http } from 'utils/fetch'
import api from 'config/api.conf'

export const getDictList = () => get(api.getDictList, { loading: true })
export const getUserList = (type, page) => get(api.user.list, { params: { type, page } })
export const getAppData = () => http.proxy.all({ url: api.user.info }, { url: api.cart.num })
