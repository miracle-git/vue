<template>
  <div class="product-page">
    <product-header :data="product">
      <a href="javascript:void(0)" class="btn btn-primary" @click="$router.push(`/detail/${id}`)">立即购买</a>
    </product-header>
    <product-detail :data="product"/>
    <product-swiper/>
    <product-video/>
  </div>
</template>

<script>
  import { getProductInfo } from 'services/product.service'
  import { ProductHeader, ProductDetail, ProductSwiper, ProductVideo } from './children'

  export default {
    data: () => ({
      product: {}
    }),
    computed: {
      id() {
        return this.$route.params.id
      }
    },
    created() {
      this.getProductInfo()
    },
    methods: {
      getProductInfo() {
        getProductInfo(this.id).then(res => this.product = res)
      }
    },
    components: {
      ProductHeader,
      ProductDetail,
      ProductSwiper,
      ProductVideo
    }
  }
</script>
