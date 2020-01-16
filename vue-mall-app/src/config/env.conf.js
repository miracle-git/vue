export default {
  loc: {
    api: 'http://123.207.32.32:8000'
    // 支持多api的形式(请求时配置apiKey, 如：'mock', 'app'等)
    // api: {
    //   mock: 'http://123.207.32.32:8000',
    //   app: 'https://m2-app.server.com/service_api'
    // }
  },
  dev: {
    api: 'http://123.207.32.32:8000'
  },
  sit: {
    api: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi'
  },
  uat: {
    api: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi'
  },
  prd: {
    api: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi'
  }
}
