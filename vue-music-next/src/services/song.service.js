import { get } from './api.service'

export const getSongsUrl = (songs) => {
  if (!songs.length) return Promise.resolve(songs)
  return get('/api/songs/url', { mid: songs.map(item => item.mid) })
    .then(res => songs.map(item => ({ ...item, url: res.map[item.mid] }))
    .filter(item => item.url.indexOf('vkey') > -1))
}
