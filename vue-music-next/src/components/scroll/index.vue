<template>
  <div class="vm-scroll" ref="rootRef">
    <slot/>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import useScroll from './hooks/use-scroll'

  export default {
    name: 'vm-scroll',
    props: {
      click: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 0
      }
    },
    emits: ['scroll'],
    setup(props, { emit }) {
      const rootRef = ref(null)
      const scroll = useScroll({ root: rootRef }, props, emit)

      return {
        rootRef,
        scroll
      }
    }
  }
</script>
