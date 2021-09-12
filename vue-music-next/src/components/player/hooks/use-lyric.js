import { ref, watch } from 'vue'
import Lyric from 'lyric-parser'
import { getLyric } from '@/services/song.service'
import { ADD_SONG_LYRIC } from '@/config/store.config'

export default function useLyric(store, refs) {
  // data
  const { lyricScroll, lyricContent, currentLyric, currentSong, toggleLyric, songReady } = refs
  const currentLine = ref(0)
  const playingLyric = ref('')
  const pureMusicLyric = ref('')
  // watch
  watch(currentSong, async val => {
    if (!val.url || !val.id) return
    // 切歌时将歌词归位
    toggleLyric(false)
    currentLyric.value = null
    currentLine.value = 0
    playingLyric.value = ''
    pureMusicLyric.value = ''
    const lyric = await getLyric(val)
    store.commit(ADD_SONG_LYRIC, { song: val, lyric })
    if (currentSong.value.lyric !== lyric) return
    currentLyric.value = new Lyric(lyric, handleLyric)
    const hasLyric = currentLyric.value.lines.length
    if (hasLyric && songReady.value) {
      toggleLyric()
    } else {
      playingLyric.value = pureMusicLyric.value = lyric.replace(/\[(\d{2}):(\d{2}):(\d{2})\]/g, '')
    }
  })
  // methods
  function handleLyric({ lineNum, txt }) {
    currentLine.value = lineNum
    playingLyric.value = txt
    const $scroll = lyricScroll.value
    const $lyric = lyricContent.value
    if (!$lyric) return
    if (lineNum > 5 && $scroll.scroll) {
      const elem = $lyric.children[lineNum - 5]
      $scroll.scroll.scrollToElement(elem, 1000)
    } else {
      $scroll.scroll.scrollTo(0, 0, 1000)
    }
  }

  return {
    currentLyric,
    currentLine,
    playingLyric,
    pureMusicLyric
  }
}
