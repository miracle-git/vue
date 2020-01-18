<template>
  <m2-swiper v-if="items.length">
    <m2-swiper-item v-for="(item, index) in items" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
      </a>
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
    },
    data: () => ({
      isLoaded: false
    }),
    methods: {
      swiperImageLoad() {
        if (!this.isLoaded) {
          this.$emit('swiperImageLoad')
          this.isLoaded = true
        }
      }
    }
  }
</script>
