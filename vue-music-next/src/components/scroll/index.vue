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
      }
    },
    setup(props) {
      const rootRef = ref(null)
      const scroll = useScroll(rootRef, props)

      return {
        rootRef,
        scroll
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
