import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDOM)

export default function useScroll(refs, options, emit) {
  // data
  const { root } = refs
  const scroll = ref(null)
  let scroller = null
  // lifecycle
  onMounted(() => {
    scroller = scroll.value = new BScroll(root.value, {
      observeDOM: true,
      ...options
    })
    // 派发scroll事件
    if (options.probeType > 0) {
      scroller.on('scroll', pos => emit('scroll', pos))
    }
  })
  onUnmounted(() => scroller && scroller.destroy())

  return scroll
}
