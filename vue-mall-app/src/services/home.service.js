import { get } from 'utils/fetch'
import api from 'config/api.conf'

export const getMultiData = () => get(api.home.multi)
