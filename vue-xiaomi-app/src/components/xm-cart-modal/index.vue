<template>
  <m2-modal title="提示" ref="modal" customClass="xm-cart-modal"
            okText="查看购物车" cancelText="继续购物"
            @ok="$router.push('/shopcart')">
    <p slot="body">商品添加成功！</p>
  </m2-modal>
</template>

<script>
  import Vue from 'vue'
  import { mapActions } from 'vuex'
  import { XM_APP_KEYS } from 'config/app.conf'
  import { addToCart } from 'services/cart.service'

  export default {
    name: 'xm-cart-modal',
    mounted() {
      this.$bus.$on(XM_APP_KEYS.addToCart, this.handleAddCart)
    },
    methods: {
      ...mapActions(['saveCartNum']),
      handleAddCart(id) {
        addToCart(id).then((res) => {
          const num = res && res.cartTotalQuantity ? res.cartTotalQuantity : 0
          if (num > 0) {
            this.saveCartNum(num)
            Vue.nextTick(() => this.$refs.modal && this.$refs.modal.show())
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
