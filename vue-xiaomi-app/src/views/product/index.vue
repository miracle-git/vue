<template>
  <div class="product-page">
    <xm-product-header :data="product">
      <a href="javascript:void(0)" class="btn btn-primary" @click="$router.push(`/detail/${id}`)">立即购买</a>
    </xm-product-header>
    <product-detail :data="product"/>
    <product-swiper/>
    <product-video/>
  </div>
</template>

<script>
  import { product } from 'mixins'
  import { XmProductHeader } from 'components'
  import { ProductDetail, ProductSwiper, ProductVideo } from './children'

  export default {
    mixins: [product],
    components: {
      XmProductHeader,
      ProductDetail,
      ProductSwiper,
      ProductVideo
    }
  }
</script>
