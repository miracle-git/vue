const { Base64 } = require('js-base64')
const { get } = require('./http')
const { lyricUrl, apiConf } = require('./constant')

// 注册歌词接口路由
function registerLyric(app) {
  app.get('/api/getLyric', (req, res) => {
    // 发送 get 请求
    get(lyricUrl, {
      '-': 'MusicJsonCallback_lrc',
      pcachetime: +new Date(),
      songmid: req.query.mid,
      g_tk_new_20200303: apiConf.token
    }).then(resp => {
      const { data } = resp
      if (data.code === apiConf.ok) {
        res.json({
          code: apiConf.ok,
          result: {
            lyric: Base64.decode(data.lyric)
          }
        })
      } else {
        res.json(data)
      }
    })
  })
}

module.exports = registerLyric
