<template>
  <div class="product-swiper">
    <div class="container">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in slideList" :key="index">
          <img :src="item.url" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { PRODUCT_SLIDE_ITEMS } from 'config/app.conf'

  export default {
    name: 'product-swiper',
    data: () => ({
      slideList: PRODUCT_SLIDE_ITEMS,
      swiperOptions: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      }
    }),
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
  @import "~swiper/dist/css/swiper.min.css";
</style>
