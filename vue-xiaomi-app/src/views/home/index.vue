<template>
  <div class="home-page">
    <swiper-box/>
    <adv-box/>
    <product-box/>
    <xm-bottom-bar/>
  </div>
</template>

<script>
  import { XmBottomBar } from 'components'
  import { SwiperBox, AdvBox, ProductBox } from './children'

  export default {
    components: {
      XmBottomBar,
      SwiperBox,
      AdvBox,
      ProductBox
    }
  }
</script>
