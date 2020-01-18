<template>
  <m2-swiper v-if="items.length" class="detail-swiper">
    <m2-swiper-item v-for="(item, index) in items" :key="index">
      <img :src="item" alt="" />
    </m2-swiper-item>
  </m2-swiper>
</template>

<script>
  export default {
    name: 'swiper',
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
