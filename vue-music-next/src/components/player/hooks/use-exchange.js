import { ref } from 'vue'

export default function useExchange() {
  // data
  const currentPanel = ref('cd')
  const middleLeftStyle = ref(null)
  const middleRightStyle = ref(null)
  const touches = { panel: 'cd' }
  // methods
  function onExchangeTouchStart(e) {
    touches.startX = e.touches[0].pageX
    touches.startY = e.touches[0].pageY
    // 配置方向锁
    touches.directionLock = ''
  }
  function onExchangeTouchMove(e) {
    const offsetX = e.touches[0].pageX - touches.startX
    const offsetY = e.touches[0].pageY - touches.startY
    if (!touches.directionLock) {
      touches.directionLock = Math.abs(offsetX) >= Math.abs(offsetY) ? 'h' : 'v'
    }
    if (touches.directionLock === 'v') return
    const left = touches.panel === 'cd' ? 0 : -window.innerWidth
    const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + offsetX))
    touches.percent = Math.abs(offsetWidth / window.innerWidth)
    if (touches.panel === 'cd') {
      currentPanel.value = touches.percent > 0.2 ? 'lyric' : 'cd'
    } else {
      currentPanel.value = touches.percent < 0.8 ? 'cd' : 'lyric'
    }
    middleLeftStyle.value = {
      opacity: 1 - touches.percent
    }
    middleRightStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`
    }
  }
  function onExchangeTouchEnd() {
    const isShowCd = currentPanel.value === 'cd'
    const offsetWidth = isShowCd ? 0 : -window.innerWidth
    const opacity = isShowCd ? 1 : 0
    const duration = '300ms'
    touches.panel = currentPanel.value
    middleLeftStyle.value = {
      opacity,
      transitionDuration: duration
    }
    middleRightStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`,
      transitionDuration: duration
    }
  }

  return {
    currentPanel,
    middleLeftStyle,
    middleRightStyle,
    onExchangeTouchStart,
    onExchangeTouchMove,
    onExchangeTouchEnd
  }
}
