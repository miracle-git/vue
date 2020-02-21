<template>
  <div class="adv-box">
    <div class="container">
      <div class="adv-list">
        <a class="adv-list-item brick-item" :href="`/product/${item.id}`" target="_blank"
           v-for="(item, index) in advs" :key="index">
          <img :src="item.url" :alt="item.desc">
        </a>
      </div>
      <div class="adv-banner">
        <a :href="`/product/${banner.id}`" target="_blank">
          <img :src="banner.url" :alt="banner.desc">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { ADV_LIST_ITEMS, BANNER_LIST_ITEMS } from 'config/app.conf'

  export default {
    name: 'adv-box',
    data: () => ({
      advs: ADV_LIST_ITEMS,
      banner: BANNER_LIST_ITEMS[0]
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
