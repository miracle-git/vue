<template>
  <div class="product-item">
    <img :src="item.show.img" alt="" @load="imageItemLoad">
    <div class="item-info">
      <p class="item-title ellipsis ">{{item.title}}</p>
      <span class="item-price">{{item.price}}</span>
      <span class="item-collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  import { EVENT_BUS_NAMES } from 'config/app.conf'

  export default {
    name: 'product-item',
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageItemLoad() {
        this.$bus.$emit(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
