<template>
  <div class="adv-box">
    <div class="adv-list">
      <a class="adv-list-item" :href="`/product/${item.id}`" v-for="(item, index) in advs" :key="index">
        <img :src="item.url" :alt="item.desc">
      </a>
    </div>
    <div class="adv-banner">
      <a :href="`/product/${banner.id}`">
        <img :src="banner.url" :alt="banner.desc">
      </a>
    </div>
  </div>
</template>

<script>
  import { ADV_LIST_ITEMS } from 'config/app.conf'

  export default {
    name: 'adv-box',
    data: () => ({
      advs: ADV_LIST_ITEMS.advs,
      banner: ADV_LIST_ITEMS.banner
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
