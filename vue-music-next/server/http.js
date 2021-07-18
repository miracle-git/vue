/*
 * 对 axios get/post 请求的封装
 */
const axios = require('axios')
const { apiConf } = require('./constant')

function get(url, params) {
  const { referer, origin, token } = apiConf

  return axios.get(url, {
    headers: {
      referer,
      origin
    },
    params: Object.assign({}, {
      g_tk: token,
      loginUin: 0,
      hostUin: 0,
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      needNewCode: 0,
      format: 'json',
      platform: 'yqq.json'
    }, params)
  })
}

function post(url, params) {
  const { referer, origin } = apiConf

  return axios.post(url, params, {
    headers: {
      referer,
      origin,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

module.exports = {
  get,
  post
}
