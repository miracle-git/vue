import { ref, computed, watch, nextTick } from 'vue'
import { SINGER_CONFIG } from '@/config/view.config'

export default function useFixed(props, refs) {
  // data
  const { group } = refs
  const heights = ref([])
  const scrollY = ref(0)
  const current = ref(0)
  const distance = ref(0)
  // computed
  const fixedTitle = computed(() => {
    if (scrollY.value < 0) return ''
    const currentGroup = props.data[current.value]
    return currentGroup ? currentGroup.title : ''
  })
  const fixedStyle = computed(() => {
    const offset = distance.value
    const { groupTitleHeight } = SINGER_CONFIG
    const diff = (offset > 0 && offset < groupTitleHeight) ? offset - groupTitleHeight : 0
    return {
      transform: `translate3d(0, ${diff}px, 0)`
    }
  })
  // watch
  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })
  watch(scrollY, val => {
    const listHeight = heights.value
    for (let i = 0, len = listHeight.length; i < len - 1; i++) {
      const top = listHeight[i]
      const bottom = listHeight[i + 1]
      if (val >= top && val <= bottom) {
        current.value = i
        distance.value = bottom - val
      }
    }
  })
  // methods
  function calculate() {
    const children = group.value.children
    const listHeight = heights.value
    let height = 0
    // 清空heights
    listHeight.length = 0
    listHeight.push(height)
    // 遍历children
    for (let i = 0, len = children.length; i < len; i++) {
      height += children[i].clientHeight
      listHeight.push(height)
    }
  }
  function onScroll(pos) {
    scrollY.value = -pos.y
  }

  return {
    current,
    fixedTitle,
    fixedStyle,
    onScroll
  }
}
