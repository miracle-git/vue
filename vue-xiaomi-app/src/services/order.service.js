import { http } from 'utils/fetch'
import api from 'config/api.conf'

export const getAddressList = () => http.proxy.get(api.address.list)
