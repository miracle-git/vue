<template>
  <div class="product-detail">
    <div class="product-main">
      <h2 class="item-title">{{data.name}}</h2>
      <h3 class="item-subtitle">{{data.subtitle}}</h3>
      <p class="item-desc">
        <span>全球首款双频 GP</span>
        <span>骁龙845</span>
        <span>AI 变焦双摄</span>
        <span>红外人脸识别</span>
      </p>
      <p class="item-price">{{data.price | currency({ precision: 0, format: false }) }}</p>
    </div>
    <div class="product-param"></div>
    <div class="product-pic"></div>
  </div>
</template>

<script>
  export default {
    name: 'product-detail',
    props: {
      data: {
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
