<template>
  <div class="product-recommend">
    <div class="recommend-header">热门推荐</div>
    <m2-grid-view>
      <product-item v-for="(item, index) in items" :key="index" :item="item"/>
    </m2-grid-view>
  </div>
</template>

<script>
  import { ProductItem } from 'components'

  export default {
    name: 'product-recommend',
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      ProductItem
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
