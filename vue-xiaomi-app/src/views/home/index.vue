<template>
  <div class="home-page">
    <home-swiper/>
    <home-adv-list/>
    <home-product-list/>
    <xm-cart-modal/>
    <xm-bottom-bar/>
  </div>
</template>

<script>
  import { XmCartModal, XmBottomBar } from 'components'
  import { HomeSwiper, HomeAdvList, HomeProductList } from './children'

  export default {
    components: {
      XmCartModal,
      XmBottomBar,
      HomeSwiper,
      HomeAdvList,
      HomeProductList
    }
  }
</script>
