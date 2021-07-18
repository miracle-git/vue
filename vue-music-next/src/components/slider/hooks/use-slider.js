import BScroll from '@better-scroll/core'
import BSlide from '@better-scroll/slide'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(BSlide)

export default function useSlider(wrapper) {
  const rootRef = ref(null)
  const current = ref(0)

  onMounted(() => {
    rootRef.value = new BScroll(wrapper.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      slide: true,
      probeType: 2
    })
    rootRef.value.on('slideWillChange', page => current.value = page.pageX)
  })

  onUnmounted(() => {
    rootRef.value.destroy()
  })

  return {
    rootRef,
    current
  }
}
