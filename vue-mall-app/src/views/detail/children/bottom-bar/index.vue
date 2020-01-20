<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div class="service">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="bar-shop">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="collect">
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottom-bar',
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
