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
  import { fixed } from 'm2-vue'

  export default {
    name: 'xm-product-header',
    mixins: [fixed],
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data: () => ({
      fixedConfig: {
        scrollTop: 150
      }
    })
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
