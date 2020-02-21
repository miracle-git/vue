const API_KEYS = {
  SLIDER_LIST: 'sliderList',
  DISC_LIST: 'discList',
  SINGER_LIST: 'singerList',
  SINGER_DETAIL: 'singerDetail'
}

module.exports = {
  API_CONFIG: {
    API_OK: 0,
    API_PARAMS: {
      g_tk: 1643575926,
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      format: 'jsonp'
    },
    API_OPTIONS: {
      param: 'jsonpCallback'
    },
    API_KEYS
  },
  API_URLS: {
    [API_KEYS.SLIDER_LIST]: {
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    },
    [API_KEYS.DISC_LIST]: {
      url: '/api/disc/list',
      proxy: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    },
    [API_KEYS.SINGER_LIST]: {
      url: '/api/singer/list',
      proxy: 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    },
    [API_KEYS.SINGER_DETAIL]: {
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    }
  }
}
