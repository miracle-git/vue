<template>
  <div class="product-param" v-if="isShowComponent">
    <table class="size-table" v-for="(table, i) in data.sizes" :key="i">
      <tr v-for="(tr, j) in table" :key="j">
        <td v-for="(td, k) in tr" :key="k">{{td}}</td>
      </tr>
    </table>
    <table class="param-table">
      <tr v-for="(item, index) in data.infos" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
    <div class="image-info" v-if="data.image.length">
      <img :src="data.image" alt=""/>
    </div>
  </div>
</template>

<script>
  import { CheckDataMixin } from 'mixins'

  export default {
    name: 'product-param',
    mixins: [CheckDataMixin]
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
