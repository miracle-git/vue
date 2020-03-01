<template>
  <div class="xm-product-header" :class="{'fixed-top':isFixed}">
    <div class="container">
      <div class="left">
        <span class="product-title">{{data.name}}</span>
      </div>
      <div class="right">
        <a href="javascript:void(0);" class="product-link">概述</a>
        <a href="javascript:void(0);" class="product-link">参数</a>
        <a href="javascript:void(0);" class="product-link last">评价</a>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { FixTopMixin } from 'mixins'

  export default {
    name: 'xm-product-header',
    mixins: [FixTopMixin],
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data: () => ({
      scrollTop: 150
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
