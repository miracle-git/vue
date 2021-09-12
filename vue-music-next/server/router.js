/*
 * 该文件是运行在 Node.js 端的，获取数据的基本的思路就是后端代理，
 * 即提供接口路由供前端页面使用，然后在路由内部，我们接收到前端请求后，
 * 再发送 HTTP 请求到第三方服务接口，携带相应的请求参数，包括签名的参数字段等等。
 * 对于从第三方接口返回的数据，我们会做一层数据处理，最终提供给前端的数据前端可以直接使用，无需再处理。
 * 这样也比较符合真实企业项目的开发规范，即数据的处理放在后端做，前端只做数据渲染和交互。
 */
const registerRecommend = require('./recommend')
const registerSinger = require('./singer')
const registerSingerDetail = require('./singer-detail')
const registerSongsUrl = require('./songs-url')
const registerLyric = require('./lyric')

function registerRouter(app) {
  registerRecommend(app)
  registerSinger(app)
  registerSingerDetail(app)
  registerSongsUrl(app)
  registerLyric(app)
}

module.exports = registerRouter
