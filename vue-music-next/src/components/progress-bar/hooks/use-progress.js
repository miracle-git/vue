import { ref, computed, watch } from 'vue'
import { PROGRESS_BAR_WIDTH } from '@/config/component.config'

export default function useProgress(props, refs, emit) {
  // data
  const { progressBar, progress } = refs
  const touch = {}
  const offset = ref(0)
  // computed
  const progressStyle = computed(() => `width:${offset.value}px`)
  const progressBtnStyle = computed(() => `transform:translate3d(${offset.value}px, 0, 0)`)
  // watch
  watch(() => props.current, val => {
    const progressBarWidth = progressBar.value.clientWidth - PROGRESS_BAR_WIDTH
    offset.value = progressBarWidth * val
  })
  // methods
  function onTouchStart(e) {
    const progressWidth = progress.value.clientWidth
    touch.x1 = e.touches[0].pageX
    touch.beginWidth = progressWidth
  }
  function onTouchMove(e) {
    const progressBarWidth = progressBar.value.clientWidth - PROGRESS_BAR_WIDTH
    const delta = e.touches[0].pageX - touch.x1
    const width = touch.beginWidth + delta
    const current = Math.min(1, Math.max(0, width / progressBarWidth))
    offset.value = progressBarWidth * current
    emit('changing', current)
  }
  function onTouchEnd() {
    const progressWidth = progress.value.clientWidth
    const progressBarWidth = progressBar.value.clientWidth - PROGRESS_BAR_WIDTH
    const current = progressWidth / progressBarWidth
    emit('changed', current)
}
  function onProgressClick(e) {
    const progressBarWidth = progressBar.value.clientWidth - PROGRESS_BAR_WIDTH
    const rect = progressBar.value.getBoundingClientRect()
    const delta = e.pageX - rect.left
    const current = delta / progressBarWidth
    emit('changed', current)
  }

  return {
    progressStyle,
    progressBtnStyle,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onProgressClick
  }
}
