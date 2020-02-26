<template>
  <m2-modal title="提示" ref="modal" modalCss="home-cart-modal">
    <p slot="body">商品添加成功！</p>
    <a href="javascript:void(0);" class="btn btn-primary" slot="footer"
       @click="$router.push('/shopcart')">查看购物车</a>
  </m2-modal>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'

  export default {
    name: 'home-cart-modal',
    created() {
      this.$bus.$on(XM_APP_KEYS.addToCart, () => this.$refs.modal.show())
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
