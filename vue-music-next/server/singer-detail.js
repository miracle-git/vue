const getSecuritySign = require('./sign')
const { get } = require('./http')
const { getRandom } = require('./util')
const { baseUrl, apiConf } = require('./constant')
const { handleSongList } = require('./util')

// 注册歌手详情接口路由
function registerSingerDetail(app) {
  app.get('/api/singer/detail', (req, res) => {
    // 构造请求 data 参数
    const data = JSON.stringify({
      comm: { ct: 24, cv: 0 },
      singerSongList: {
        method: 'GetSingerSongList',
        param: { order: 1, singerMid: req.query.mid, begin: 0, num: 100 },
        module: 'musichall.song_list_server'
      }
    })
    // 计算签名值
    const sign = getSecuritySign(data)
    // 计算随机值
    const random = getRandom('getSingerDetail')
    // 发送 get 请求
    get(baseUrl, {
      sign,
      '-': random,
      data
    }).then(resp => {
      const { data } = resp
      if (data.code !== apiConf.ok) {
        res.json(data)
        return
      }
      const list = data.singerSongList.data.songList
      // 歌单详情、榜单详情接口都有类似处理逻辑，固封装成函数
      const songList = handleSongList(list)
      res.json({
        code: apiConf.ok,
        result: {
          songs: songList
        }
      })
    })
  })
}

module.exports = registerSingerDetail
