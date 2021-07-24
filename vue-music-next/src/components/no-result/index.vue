<template>
  <div class="vm-no-result">
    <div class="no-result-content">
      <div class="icon"></div>
      <p class="text">{{title}}</p>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'vm-no-result',
    setup() {
      return {
        title: ref('抱歉，没有结果')
      }
    }
  }
</script>

<style lang="scss">
  @import './index';
</style>
