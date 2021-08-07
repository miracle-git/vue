<template>
  <div class="vm-progress-bar" ref="progressBarRef" @click="onProgressClick">
    <div class="progress-bar-inner">
      <div class="progress" ref="progressRef" :style="progressStyle"></div>
      <div class="progress-btn-wrapper" :style="progressBtnStyle"
           @touchstart.prevent="onTouchStart"
           @touchmove.prevent="onTouchMove"
           @touchend.prevent="onTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { useProgress } from './hooks'

  export default defineComponent({
    name: 'vm-progress-bar',
    props: {
      current: {
        type: Number,
        default: 0
      }
    },
    emits: ['changing', 'changed'],
    setup(props, { emit }) {
      const progressBarRef = ref(null)
      const progressRef = ref(null)

      return {
        progressBarRef,
        progressRef,
        ...useProgress(props, { progressBar: progressBarRef, progress: progressRef }, emit)
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
