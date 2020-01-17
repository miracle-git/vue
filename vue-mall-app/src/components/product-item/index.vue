<template>
  <div class="product-item">
    <img :src="item.show.img" alt="">
    <div class="item-info">
      <p class="item-title ellipsis ">{{item.title}}</p>
      <span class="item-price">{{item.price}}</span>
      <span class="item-collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-item',
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
