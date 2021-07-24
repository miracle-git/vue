const getSecuritySign = require('./sign')
const { get } = require('./http')
const { getRandom } = require('./util')
const { baseUrl, apiConf, hotTag } = require('./constant')
const pinyin = require('pinyin')

// 注册歌手列表接口路由
function registerSinger(app) {
  app.get('/api/singer', (req, res) => {
    // 构造请求 data 参数
    const data = JSON.stringify({
      comm: { ct: 24, cv: 0 },
      singerList: {
        module: 'Music.SingerListServer',
        method: 'get_singer_list',
        param: { area: -100, sex: -100, genre: -100, index: -100, sin: 0, cur_page: 1 }
      }
    })
    // 计算签名值
    const sign = getSecuritySign(data)
    // 计算随机值
    const random = getRandom('getSinger')
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
      // 处理歌手列表数据
      const { singerlist: singerList } = data.singerList.data
      // 处理歌手数据映射
      const map = (list) => list.map(item => ({
        id: item.singer_id,
        mid: item.singer_mid,
        name: item.singer_name,
        pic: item.singer_pic.replace(/\.webp$/, '.jpg').replace('150x150', '800x800')
      }))
      // 构造歌手 Map 数据结构
      const singerMap = {
        hot: {
          title: hotTag,
          list: map(singerList.slice(0, 10))
        }
      }
      singerList.forEach((item) => {
        // 把歌手名转成拼音
        const p = pinyin(item.singer_name)
        if (!p || !p.length) {
          return
        }
        // 获取歌手名拼音的首字母
        const key = p[0][0].slice(0, 1).toUpperCase()
        if (key) {
          if (!singerMap[key]) {
            singerMap[key] = {
              title: key,
              list: []
            }
          }
          // 每个字母下面会有多名歌手
          singerMap[key].list.push(map([item])[0])
        }
      })
      // 热门歌手
      const hot = []
      // 字母歌手
      const letter = []
      // 遍历处理 singerMap，让结果有序
      for (const key in singerMap) {
        const item = singerMap[key]
        if (item.title.match(/[a-zA-Z]/)) {
          letter.push(item)
        } else if (item.title === hotTag) {
          hot.push(item)
        }
      }
      // 按字母顺序排序
      letter.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      res.json({
        code: apiConf.ok,
        result: {
          singers: hot.concat(letter)
        }
      })
    })
  })
}

module.exports = registerSinger
