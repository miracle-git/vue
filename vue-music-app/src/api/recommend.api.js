import { getAsyncData, getJsonpData, getAxiosData, getApiUrl, apiKeys } from '@api/base.api'

export function getSliderData(resolve) {
  const url = getApiUrl(apiKeys.SLIDER_LIST)
  const promise = getJsonpData(url, {
    platform: 'h5',
    needNewCode: 1,
    uin: 0
  })
  return getAsyncData(promise, resolve)
}

export function getDiscList(resolve) {
  const url = getApiUrl(apiKeys.DISC_LIST)
  const promise = getAxiosData(url, {
    platform: 'yqq',
    rnd: Math.random(),
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    needNewCode: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    categoryId: 10000000,
    picmid: 1,
    format: 'json'
  })
  return getAsyncData(promise, resolve)
}
