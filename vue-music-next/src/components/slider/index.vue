<template>
  <div class="vm-slider" ref="rootRef">
    <div class="slider-group">
      <div class="slider-page" v-for="item in sliders" :key="item.id">
        <a :href="item.link">
          <img :src="item.pic"/>
        </a>
      </div>
    </div>
    <div class="slider-dots">
      <span class="slider-dot" v-for="(item,index) in sliders" :key="item.id"
            :class="{'active': current === index}">
      </span>
    </div>
  </div>
</template>

<script>
  import { ref, defineComponent } from 'vue'
  import useSlider from './hooks/use-slider'

  export default defineComponent({
    name: 'vm-slider',
    props: {
      sliders: {
        type: Array,
        default: () => []
      }
    },
    setup() {
      const rootRef = ref(null)
      const { current } = useSlider(rootRef)

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
