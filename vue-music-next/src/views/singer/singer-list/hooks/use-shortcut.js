import { reactive, computed } from 'vue'
import { SINGER_CONFIG } from '@/config/view.config'

export default function useShortcut(props, refs) {
  // 定义数据
  const { group, scroll: scroller } = refs
  const touches = reactive({})
  // 计算属性
  const shortcutList = computed(() => props.data.map(item => item.title))
  // 定义方法
  function onTouchStart(e) {
    const { index = 0 } = e.target.dataset
    const anchorIndex = index | 0
    touches.y1 = e.touches[0].pageY
    touches.anchorIndex = anchorIndex

    scrollTo(anchorIndex)
  }
  function onTouchMove(e) {
    touches.y2 = e.touches[0].pageY
    const offset = (touches.y2 - touches.y1) / SINGER_CONFIG.shortcutItemHeight | 0
    const anchorIndex = touches.anchorIndex + offset

    scrollTo(anchorIndex)
  }
  function scrollTo(index) {
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const target = group.value.children[index]
    const { scroll } = scroller.value
    scroll.scrollToElement(target, 0)
  }
  // 返回数据
  return {
    shortcutList,
    onTouchStart,
    onTouchMove
  }
}
