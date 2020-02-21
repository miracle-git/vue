import { getAsyncData, getJsonpData, getAxiosData, getApiUrl, apiKeys } from '@api/base.api'

export function getSingerList(resolve) {
  const url = getApiUrl(apiKeys.SINGER_LIST)
  const params = {
    g_tk: 1462402580,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'json'
  }
  const data = JSON.stringify({
    comm: {
      ct: 24,
      cv: 10000
    },
    singerList: {
      module: 'Music.SingerListServer',
      method: 'get_singer_list',
      param: {
        area: -100,
        sex: -100,
        genre: -100,
        index: -100,
        sin: 0,
        cur_page: 1
      }
    }
  })
  const promise = getAxiosData(url, { ...params, data })
  return getAsyncData(promise, resolve)
}

export function getSingerDetail(resolve, singerId) {
  const url = getApiUrl(apiKeys.SINGER_DETAIL)
  const params = {
    g_tk: 5381,
    singerid: singerId,
    uin: 0,
    format: 'json',
    hostUin: 0,
    notice: 0,
    platform: 'h5page',
    needNewCode: 1,
    order: 'listen',
    from: 'h5',
    num: 50,
    begin: 0
  }
  const promise = getJsonpData(url, params)
  return getAsyncData(promise, resolve)
}
