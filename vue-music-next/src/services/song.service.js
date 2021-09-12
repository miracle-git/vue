import { get } from './api.service'

export const getSongsUrl = (songs) => {
  if (!songs.length) return Promise.resolve(songs)
  return get('/api/songs/url', { mid: songs.map(item => item.mid) })
    .then(res => songs.map(item => ({ ...item, url: res.map[item.mid] }))
    .filter(item => item.url.indexOf('vkey') > -1))
}

const lyricMap = {}
export const getLyric = (song) => {
  const { mid, lyric } = song
  const lyricData = lyric || lyricMap[mid]
  if (lyricData) return Promise.resolve(lyricData)

  return get('/api/getLyric', { mid })
    .then(res => {
      lyricMap[mid] = res ? res.lyric : '[00:00:00]该歌曲为没有填词的纯音乐，请您欣赏'
      return lyricMap[mid]
    })
}
