import { computed, watch } from 'vue'

export default function useCd(store, refs) {
  // data
  const { cd, cdImg, playing } = refs
  // computed
  const cdStyle = computed(() => playing.value ? 'playing' : '')
  // watch
  watch(playing, val => {
    if (!val) {
      syncTransform(cd.value, cdImg.value)
    }
  })
  // methods
  function syncTransform(cd, img) {
    const cdTransform = getComputedStyle(cd).transform
    const imgTransform = getComputedStyle(img).transform
    cd.style.transform = cdTransform === 'none' ? imgTransform : imgTransform.concat(' ', cdTransform)
  }

  return {
    cdStyle
  }
}
