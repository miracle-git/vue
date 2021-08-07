import { computed } from 'vue'
import { PLAY_MODE } from '@/config/store.config'

export default function useMode(store) {
  // computed
  const playMode = computed(() => store.state.playMode)
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
