<template>
  <div class="swiper-box">
    <div class="container">
      <nav-menu/>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in slideList" :key="index">
          <a :href="`/product/${item.id}`">
            <img :src="item.url" :alt="item.desc">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { SWIPER_SLIDE_ITEMS } from 'config/app.conf'
  import NavMenu from '../nav-menu'

  export default {
    name: 'swiper-box',
    data: () => ({
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
      },
      slideList: SWIPER_SLIDE_ITEMS
    }),
    components: {
      swiper,
      swiperSlide,
      NavMenu
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
  @import "~swiper/dist/css/swiper.min.css";
</style>
