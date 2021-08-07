import BScroll from '@better-scroll/core'
import BSlide from '@better-scroll/slide'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(BSlide)

export default function useSlider(refs) {
  // data
  const { root } = refs
  const current = ref(0)
  // lifecycle
  onMounted(() => {
    root.value = new BScroll(root.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      slide: true,
      probeType: 2
    })
    root.value.on('slideWillChange', page => current.value = page.pageX)
  })
  onUnmounted(() => root.value && root.value.destroy())

  return current
}
