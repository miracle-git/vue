import originJsonp from 'jsonp'
import { normalizeUrl } from '@common/utils'

export default function jsonp(url, params, opts) {
  return new Promise((resolve, reject) => {
    originJsonp(normalizeUrl(url, params), opts, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}
