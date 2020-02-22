<template>
  <div class="home-page">
    <swiper-box/>
    <adv-box/>
    <product-box/>
    <xm-bottom-bar/>
    <cart-modal/>
  </div>
</template>

<script>
  import { XmBottomBar } from 'components'
  import { SwiperBox, AdvBox, ProductBox, CartModal } from './children'

  export default {
    components: {
      XmBottomBar,
      SwiperBox,
      AdvBox,
      ProductBox,
      CartModal
    }
  }
</script>
