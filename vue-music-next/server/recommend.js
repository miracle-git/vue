const getSecuritySign = require('./sign')
const { get } = require('./http')
const { getRandom } = require('./util')
const { baseUrl, apiConf } = require('./constant')

// 注册推荐列表接口路由
function registerRecommend(app) {
  app.get('/api/recommend', (req, res) => {
    // 构造请求 data 参数
    const data = JSON.stringify({
      comm: { ct: 24 },
      recomPlaylist: {
        method: 'get_hot_recommend',
        param: { async: 1, cmd: 2 },
        module: 'playlist.HotRecommendServer'
      },
      focus: {
        module: 'music.musicHall.MusicHallPlatform',
        method: 'GetFocus',
        param: {}
      }
    })
    // 计算签名值
    const sign = getSecuritySign(data)
    // 计算随机值
    const random = getRandom('getRecommend')
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
      // 处理轮播图数据
      const focusList = data.focus.data.shelf.v_niche[0].v_card
      const sliders = []
      const jumpPrefixMap = {
        10002: 'https://y.qq.com/n/yqq/album/',
        10014: 'https://y.qq.com/n/yqq/playlist/',
        10012: 'https://y.qq.com/n/yqq/mv/v/'
      }
      // 最多获取 10 条数据
      const len = Math.min(focusList.length, 10)
      for (let i = 0; i < len; i++) {
        const item = focusList[i]
        const sliderItem = {}
        // 单个轮播图数据包括 id、pic、link 等字段
        sliderItem.id = item.id
        sliderItem.pic = item.cover
        if (jumpPrefixMap[item.jumptype]) {
          sliderItem.link = jumpPrefixMap[item.jumptype] + (item.subid || item.id) + '.html'
        } else if (item.jumptype === 3001) {
          sliderItem.link = item.id
        }
        sliders.push(sliderItem)
      }
      // 处理推荐歌单数据
      const albumList = data.recomPlaylist.data.v_hot
      const albums = []
      for (let i = 0; i < albumList.length; i++) {
        const item = albumList[i]
        const albumItem = {}
        // 推荐歌单数据包括 id、username、title、pic 等字段
        albumItem.id = item.content_id
        albumItem.username = item.username
        albumItem.title = item.title
        albumItem.pic = item.cover
        albums.push(albumItem)
      }
      // 往前端发送一个标准格式的响应数据，包括成功错误码和数据
      res.json({
        code: apiConf.ok,
        result: {
          sliders,
          albums
        }
      })
    })
  })
}

module.exports = registerRecommend
