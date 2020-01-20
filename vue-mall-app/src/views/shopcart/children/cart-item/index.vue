<template>
  <div class="cart-item">
    <div class="item-checked">
      <check-button :checked="data.checked" @click.native="checkItemClick"/>
    </div>
    <div class="item-img">
      <img :src="data.image" alt=""/>
    </div>
    <div class="item-info">
      <div class="item-title">{{data.title}}</div>
      <div class="item-desc ellipsis">商品描述：{{data.desc}}</div>
      <div class="item-other">
        <div class="item-price left">￥{{data.price}}</div>
        <div class="item-count right">{{data.count}}件</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckButton } from 'components'

  export default {
    name: 'cart-item',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkItemClick() {
        this.data.checked = !this.data.checked
      }
    },
    components: {
      CheckButton
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
