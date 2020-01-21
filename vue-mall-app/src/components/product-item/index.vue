<template>
  <div class="product-item" @click="itemClick">
    <img v-lazy="productImg" alt="" @load="imageItemLoad">
    <div class="item-info">
      <p class="item-title ellipsis ">{{item.title}}</p>
      <span class="item-price">{{item.price | currency }}</span>
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
    computed: {
      productImg() {
        return this.item.image || this.item.show.img
      }
    },
    methods: {
      imageItemLoad() {
        this.$bus.$emit(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD)
      },
      itemClick() {
        this.item.iid && this.$router.push(`/detail/${this.item.iid}`)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
