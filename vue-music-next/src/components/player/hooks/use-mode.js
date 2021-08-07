import { computed } from 'vue'
import { PLAY_MODE } from '@/config/store.config'

export default function useMode(store, refs) {
  // data
  const { playMode } = refs
  // computed
  const modeIcon = computed(() => {
    return playMode.value === PLAY_MODE.sequence
      ? 'icon-sequence' : playMode.value === PLAY_MODE.random
      ? 'icon-random' : 'icon-loop'
  })
  // methods
  function onChangeMode() {
    const mode = (playMode.value + 1) % 3
    store.dispatch('changeMode', mode)
  }

  return {
    modeIcon,
    onChangeMode
  }
}
