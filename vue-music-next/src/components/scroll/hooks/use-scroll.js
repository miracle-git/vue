import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDOM)

export default function useScroll(wrapper, options, emit) {
  const scroll = ref(null)
  let scroller = null

  onMounted(() => {
    scroller = scroll.value = new BScroll(wrapper.value, {
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
