import { DataType, DataFetch, DataUtil, DEFAULT_FETCH_OPTIONS } from 'm2-core'
import context from '@/main'
import env from 'config/env.conf'

const _fetch_core = {
  _check: (res) => {
    let result = {}
    if (DataType.isArray(res)) {
      return { success: true, data: res }
    }
    if (res.success || res.status.code === 1001) {
      result = { success: true, data: res.data || res.result }
    } else {
      result = { success: false, data: null, msg: res.message }
    }
    return result
  },
  _spinner: {
    show(loading) {
      loading && context && context.$loading()
    },
    hide(loading) {
      loading && context && context.$loading.hide()
    }
  },
  // _spinner: (loading, show = true) => {
  //   const $indicator = document.getElementById('indicator')
  //   if (loading && $indicator) {
  //     $indicator.style.display = show ? 'block' : 'none'
  //   }
  // },
  _handle: (res, options = {}) => {
    if (options.key) {
      if (DataType.isArray(res.data)) {
        res.data.map(item => item._key = DataUtil.randomString(options.keyLen))
      } else if (DataType.isArray(res.data[DEFAULT_FETCH_OPTIONS.itemsName])) {
        res.data[DEFAULT_FETCH_OPTIONS.itemsName].map(item => item._key = DataUtil.randomString(options.keyLen))
      }
    }
    return res.data
  },
  _fetch: (url, options) => {
    return new Promise((resolve, reject) => {
      _fetch_core._spinner.show(options.loading)
      // _fetch_core._spinner(options.loading, true)
      return DataFetch.axios(url, {
        env,
        // apiKey: 'app', // 当存在多个api接口时，配置默认的apiKey(大多数场景使用的api服务)
        ...options
      }).then(res => {
        _fetch_core._spinner.hide(options.loading)
        // _fetch_core._spinner(options.loading, false)
        res = _fetch_core._check(res)
        if (res.success) {
          resolve(_fetch_core._handle(res, options))
        } else {
          reject({
            title: `接口:[${url}]调用失败`,
            message: res.msg
          })
        }
      }).catch(err => {
        _fetch_core._spinner.hide(options.loading)
        // _fetch_core._spinner(options.loading, false)
        reject({
          title: `接口:[${url}]调用失败`,
          message: err.msg || err
        })
      })
    })
  },
  _fetchAll: (options = []) => {
    if (DataType.isEmptyArray(options)) return
    const loading = options.some(opt => opt && opt.config && opt.config.loading)
    return new Promise((resolve, reject) => {
      _fetch_core._spinner.show(loading)
      // _fetch_core._spinner(loading, true)
      options.forEach(opt => opt.config = { ...opt.config, env })
      return DataFetch.all(options).then(res => {
        _fetch_core._spinner.hide(loading)
        // _fetch_core._spinner(loading, false)
        resolve(res.map((data, index) => {
          data = _fetch_core._check(data)
          return _fetch_core._handle(data, options[index].config)
        }))
      }).catch(err => {
        _fetch_core._spinner.hide(loading)
        // _fetch_core._spinner(loading, false)
        reject({
          title: `接口调用失败`,
          message: err.msg || err
        })
      })
    })
  }
}

export const get = (url, options = {}) => _fetch_core._fetch(url, options)
export const post = (url, options = {}) => _fetch_core._fetch(url, { ...options, method: 'post' })
export const all = (...options) => _fetch_core._fetchAll(options)
