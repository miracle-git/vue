<template>
  <div class="product-shop" v-if="isShowComponent">
    <div class="shop-header">
      <img class="logo" :src="data.logo" alt=""/>
      <span class="title">{{data.name}}</span>
    </div>
    <div class="shop-detail">
      <div class="detail-item item-left">
        <div class="sell-info">
          <div class="count">{{data.sells | sellCount}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="product-info">
          <div class="count">{{data.count}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="detail-item item-right">
        <table class="detail-info">
          <tr v-for="(item, index) in data.scores" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'score-more': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-footer">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  import { CheckDataMixin } from 'mixins'

  export default {
    name: 'product-shop',
    mixins: [CheckDataMixin],
    filters: {
      sellCount(val) {
        return val < 10000 ? val : (val / 10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
