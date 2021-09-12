import { computed, watch } from 'vue'
import { PLAY_MODE, SET_FULL_SCREEN, SET_PLAY_STATE, SET_CURRENT_INDEX } from '@/config/store.config'

export default function usePlay(store, refs) {
  // data
  const { audio, currentTime, currentSong, playing, playMode, songReady, toggleLyric } = refs
  // computed
  const currentIndex = computed(() => store.state.currentIndex)
  const fullScreen = computed(() => store.state.fullScreen)
  const playList = computed(() => store.state.playList)
  const playIcon = computed(() => playing.value ? 'icon-pause' : 'icon-play')
  const disabledIcon = computed(() => songReady.value ? '' : 'disabled-icon')
  // watch
  watch(currentSong, val => {
    if (!val.id || !val.url) return
    currentTime.value = 0
    songReady.value = false
    audio.value.load()
    audio.value.src = val.url
    audio.value.play()
    beginPlaying()
  })
  watch(playing, val => {
    if (!songReady.value) return
    const $audio = audio.value
    if (val) {
      $audio.play()
      toggleLyric()
    } else {
      $audio.pause()
      toggleLyric(false)
    }
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
      beginPlaying()
    }
  }
  function loop() {
    audio.value.currentTime = 0
    audio.value.play()
    beginPlaying()
  }
  function beginPlaying() {
    if (!playing.value) {
      store.commit(SET_PLAY_STATE, true)
    }
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
    toggleLyric()
  }
  function onError() {
    songReady.value = true
  }
  function onEnded() {
    currentTime.value = 0
    if (playMode.value === PLAY_MODE.loop) {
      loop()
    } else {
      onNext()
    }
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
    fullScreen,
    playIcon,
    disabledIcon,
    onGoBack,
    onTogglePlay,
    onPrev,
    onNext,
    onPause,
    onReady,
    onError,
    onEnded
  }
}
