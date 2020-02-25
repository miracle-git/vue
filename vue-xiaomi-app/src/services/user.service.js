import { http } from 'utils/fetch'
import api from 'config/api.conf'

export const login = (username, password) => http.proxy.post(api.user.login, { params: { username, password } })
export const register = ({ username, password, email }) => http.proxy.post(api.user.register, { params: { username, password, email } })
