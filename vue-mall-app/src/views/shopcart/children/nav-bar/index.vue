<template>
  <m2-nav-bar class="nav-bar">
    <span slot="center">
      购物车
      <span v-if="cartLength">({{cartLength}})</span>
    </span>
  </m2-nav-bar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'nav-bar',
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
