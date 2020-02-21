export default class Song {
  constructor({id, name, mid, singer, album, duration, image, url}) {
    this.id = id
    this.name = name
    this.mid = mid
    this.singer = singer
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(music) {
  return new Song({
    id: music.songid,
    name: music.songname,
    mid: music.songmid,
    singer: music.singer.map(m => m.name).join('/'),
    album: music.albumname,
    duration: music.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${music.albummid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/C100${music.songmid}.m4a?fromtag=0&guid=${music.songid}`
  })
}
