<template>
  <div class="vm-slider" ref="rootRef">
    <div class="slider-group">
      <div class="slider-page" v-for="item in data" :key="item.id">
        <a :href="item.link">
          <img :src="item.pic"/>
        </a>
      </div>
    </div>
    <div class="slider-dots">
      <span class="slider-dot" v-for="(item,index) in data" :key="item.id"
            :class="{'active': current === index}">
      </span>
    </div>
  </div>
</template>

<script>
  import { ref, defineComponent } from 'vue'
  import { useSlider } from './hooks'

  export default defineComponent({
    name: 'vm-slider',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    setup() {
      // data
      const rootRef = ref(null)
      const current = useSlider({ root: rootRef })

      return {
        rootRef,
        current
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
