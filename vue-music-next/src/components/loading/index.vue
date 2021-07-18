<template>
  <div class="vm-loading">
    <div class="loading-content">
      <img width="24" height="24" :src="require('@/assets/images/loading.gif')"/>
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'vm-loading',
    setup() {
      return {
        title: ref('正在载入...')
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
