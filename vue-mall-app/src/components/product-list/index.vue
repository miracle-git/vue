<template>
  <div class="product-list">
    <product-item v-for="(item, index) in items" :key="index" :item="item"/>
  </div>
</template>

<script>
  import ProductItem from '../product-item'

  export default {
    name: 'product-list',
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
