import { ref, computed, watch, nextTick } from 'vue'
import { SET_FULL_SCREEN, SET_PLAY_STATE, SET_CURRENT_INDEX } from '@/config/store.config'

export default function usePlay(store, refs) {
  // data
  const { audio } = refs
  const songReady = ref(false)
  // computed
  const currentSong = computed(() => store.getters.currentSong)
  const currentIndex = computed(() => store.state.currentIndex)
  const fullScreen = computed(() => store.state.fullScreen)
  const playList = computed(() => store.state.playList)
  const playing = computed(() => store.state.playing)
  const playIcon = computed(() => playing.value ? 'icon-pause' : 'icon-play')
  const disabledIcon = computed(() => songReady.value ? '' : 'disabled-icon')
  // watch
  watch(currentSong, val => {
    if (!val.id || !val.url) return
    nextTick(() => {
      songReady.value = false
      audio.value.src = val.url
      audio.value.play()
    })
  })
  watch(playing, val => {
    if (!songReady.value) return
    val ? audio.value.play() : audio.value.pause()
  })
  // methods
  function play(handlerIndex) {
    const songs = playList.value
    if (!songReady.value || !songs.length) return
    if (!songs.length === 1) {
      loop()
    } else {
      const index = handlerIndex(songs)
      store.commit(SET_CURRENT_INDEX, index)
      if (!playing.value) {
        store.commit(SET_PLAY_STATE, true)
      }
    }
  }
  function loop() {
    audio.value.currentTime = 0
    audio.value.play()
  }
  function onGoBack() {
    store.commit(SET_FULL_SCREEN, false)
  }
  function onTogglePlay() {
    if (!songReady.value) return
    store.commit(SET_PLAY_STATE, !playing.value)
  }
  function onPause() {
    store.commit(SET_PLAY_STATE, false)
  }
  function onReady() {
    if (songReady.value) return
    songReady.value = true
  }
  function onError() {
    songReady.value = true
  }
  function onPrev() {
    play(songs => {
      let index = currentIndex.value - 1
      if (index === -1) {
        index = songs.length - 1
      }
      return index
    })
  }
  function onNext() {
    play(songs => {
      let index = currentIndex.value + 1
      if (index === songs.length) {
        index = 0
      }
      return index
    })
  }

  return {
    currentSong,
    fullScreen,
    playIcon,
    disabledIcon,
    onGoBack,
    onTogglePlay,
    onPrev,
    onNext,
    onPause,
    onReady,
    onError
  }
}
