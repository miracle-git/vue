<template>
  <div class="home-page">
    <home-nav-bar/>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import { getMultiData } from 'services/home.service'
  import { HomeNavBar, HomeSwiper } from './children'

  export default {
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getMultiData().then(res => {
        this.banners = res.banner.list
        this.recommends = res.recommend.list
      })
    },
    components: {
      HomeNavBar,
      HomeSwiper
    }
  }
</script>
