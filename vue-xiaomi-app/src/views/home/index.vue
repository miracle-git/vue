<template>
  <div class="home-page">
    <home-swiper/>
    <home-adv-list/>
    <home-product-list/>
    <xm-bottom-bar/>
    <home-cart-modal/>
  </div>
</template>

<script>
  import { XmBottomBar } from 'components'
  import { HomeSwiper, HomeAdvList, HomeProductList, HomeCartModal } from './children'

  export default {
    components: {
      XmBottomBar,
      HomeSwiper,
      HomeAdvList,
      HomeProductList,
      HomeCartModal
    }
  }
</script>
