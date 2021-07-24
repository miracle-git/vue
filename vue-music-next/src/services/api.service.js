import axios from 'axios'
import { API_OK, BASE_URL } from '@/config/api.config'

axios.defaults.baseURL = BASE_URL

export function get(url, params) {
  return axios.get(url, { params }).then(res => {
    const { data } = res
    if (data.code === API_OK) {
      return data.result
    }
  }).catch(e => console.warn(e))
}
