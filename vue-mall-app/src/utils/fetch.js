import { DataType, DataFetch, DataUtil, DEFAULT_FETCH_OPTIONS } from 'm2-core'
import env from 'config/env.conf'

const _check = (res) => {
  let result = {}
  if (res.success || res.status.code === 1001) {
    result = { success: true, data: res.data || res.result }
  } else {
    result = { success: false, data: null, msg: res.message }
  }
  return result
}

const _fetch = (url, options) => {
  const _opts = {
    ...DEFAULT_FETCH_OPTIONS,
    ...options
  }

  const $indicator = document.getElementById('indicator')
  _opts.loading && ($indicator.style.display = 'block')

  return new Promise((resolve, reject) => {
    return DataFetch.axios(url, {
      env,
      // apiKey: 'app', // 当存在多个api接口时，配置默认的apiKey(大多数场景使用的api服务)
      ..._opts
    }).then(res => {
      _opts.loading && ($indicator.style.display = 'none')
      res = _check(res)
      if (res.success) {
        if (res.data) {
          if (_opts.key) {
            if (DataType.isArray(res.data)) {
              res.data.map(item => item._key = DataUtil.randomString(_opts.keyLen))
            } else if (DataType.isArray(res.result.list)) {
              res.data.list.map(item => item._key = DataUtil.randomString(_opts.keyLen))
            }
          }
          resolve(res.data)
        } else {
          resolve(res)
        }
      } else {
        reject({
          title: `接口:[${url}]调用失败`,
          message: res.msg
        })
      }
    }).catch(err => {
      _opts.loading && ($indicator.style.display = 'none')
      reject({
        title: `接口:[${url}]调用失败`,
        message: err.msg || err
      })
    })
  })
}

export const get = (url, options = {}) => _fetch(url, options)
export const post = (url, options = {}) => _fetch(url, { ...options, method: 'post' })
