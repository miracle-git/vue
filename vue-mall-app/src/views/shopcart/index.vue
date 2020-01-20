<template>
  <div class="shopcart-page">
    <nav-bar/>
    <m2-scroll class="content" ref="scroll">
      <cart-list/>
    </m2-scroll>
    <bottom-bar v-if="cartLength"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { NavBar, CartList, BottomBar } from './children'

  export default {
    computed: {
      ...mapGetters(['cartLength'])
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    components: {
      NavBar,
      CartList,
      BottomBar
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
