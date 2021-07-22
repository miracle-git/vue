import { ref, reactive, computed } from 'vue'
import { SHORTCUT_ITEM_HEIGHT } from '@/views/singer/constant'

export default function useShortcut(props, { groupRef }) {
  // 定义数据
  const scrollRef = ref(null)
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
    const offset = (touches.y2 - touches.y1) / SHORTCUT_ITEM_HEIGHT | 0
    const anchorIndex = touches.anchorIndex + offset

    scrollTo(anchorIndex)
  }
  function scrollTo(index) {
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const target = groupRef.value.children[index]
    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(target, 0)
  }
  // 返回数据
  return {
    scrollRef,
    shortcutList,
    onTouchStart,
    onTouchMove
  }
}
