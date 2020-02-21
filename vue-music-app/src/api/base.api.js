import jsonp from '@common/jsonp'
import axios from 'axios'
import { _$ } from '@common/utils'

const api = require('@constants/api.conf')
const apiUrl = api.API_URLS
const { API_OK, API_PARAMS, API_OPTIONS, API_KEYS } = api.API_CONFIG

const extendParams = (extraParams) => {
  let params = API_PARAMS
  if (extraParams) {
    params = { ...API_PARAMS, ...extraParams }
  }
  return params
}

export const apiKeys = API_KEYS

export function getApiUrl(key) {
  return key && apiUrl[key] ? apiUrl[key].url : ''
}

export function getJsonpData(url, extraParams) {
  const queryParams = extendParams(extraParams)
  return jsonp(url, queryParams, API_OPTIONS)
}

export function getAxiosData(url, extraParams) {
  const queryParams = extendParams(extraParams)
  return axios.get(url, { params: queryParams }).then(res => Promise.resolve(res.data))
}

export function getAsyncData(promise, success, error = null) {
  if (!_$.isInstance(promise, Promise) || !_$.isFunction(success)) return
  promise.then(res => {
    if (res.code === API_OK) {
      success(res.data || res)
    }
  }).catch(err => {
    console.log(err)
    if (_$.isFunction(error)) {
      error(err)
    }
  })
}
