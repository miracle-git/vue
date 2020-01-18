<template>
  <div class="product-info" v-if="isShowComponent">
    <div class="item-title">{{data.title}}</div>
    <div class="item-price">
      <span class="new">{{data.newPrice}}</span>
      <span class="old">{{data.oldPrice}}</span>
      <span class="discount" v-if="data.discount">{{data.discount}}</span>
    </div>
    <div class="item-columns">
      <span>{{data.columns[0]}}</span>
      <span>{{data.columns[1]}}</span>
      <span>{{data.services[data.services.length - 1].name}}</span>
    </div>
    <div class="item-services">
      <span class="service-item" v-for="index in data.services.length - 1" :key="index">
        <img :src="data.services[index - 1].icon" alt=""/>
        <span>{{data.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  import { CheckDataMixin } from 'mixins'

  export default {
    name: 'product-info',
    mixins: [CheckDataMixin]
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
