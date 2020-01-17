<template>
  <m2-swiper v-if="banners.length">
    <m2-swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </m2-swiper-item>
  </m2-swiper>
</template>

<script>
  export default {
    name: 'home-swiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
