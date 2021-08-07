import { ref, computed } from 'vue'
import { formatTime } from '@/assets/scripts/util'
import { SET_PLAY_STATE } from '@/config/store.config'

export default function useProgress(store, refs) {
  // data
  const { audio, currentTime, currentSong, playing } = refs
  const progressChanging = ref(false)
  // computed
  const progress = computed(() => currentTime.value / currentSong.value.duration)
  const beginTime = computed(() => formatTime(currentTime.value))
  const endTime = computed(() => formatTime(currentSong.value.duration))
  // methods
  function onUpdateTime(e) {
    !progressChanging.value && (currentTime.value = e.target.currentTime)
  }
  function onProgressChanging(current) {
    progressChanging.value = true
    currentTime.value = currentSong.value.duration * current
  }
  function onProgressChanged(current) {
    progressChanging.value = false
    currentTime.value = audio.value.currentTime = currentSong.value.duration * current
    if (!playing.value) {
      store.commit(SET_PLAY_STATE, true)
    }
  }

  return {
    progress,
    beginTime,
    endTime,
    onUpdateTime,
    onProgressChanging,
    onProgressChanged
  }
}
