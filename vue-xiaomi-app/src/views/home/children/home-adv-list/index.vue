<template>
  <div class="home-adv-list">
    <div class="container">
      <div class="adv-items">
        <a class="adv-list-item brick-item" :href="`/product/${item.id}`"
           v-for="(item, index) in advs" :key="index">
          <img v-lazy="item.url" :alt="item.desc">
        </a>
      </div>
      <div class="adv-banner">
        <a :href="`/product/${banner.id}`">
          <img v-lazy="banner.url" :alt="banner.desc">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { ADV_LIST_ITEMS, BANNER_LIST_ITEMS } from 'config/app.conf'

  export default {
    name: 'home-adv-list',
    data: () => ({
      advs: ADV_LIST_ITEMS,
      banner: BANNER_LIST_ITEMS[0]
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
