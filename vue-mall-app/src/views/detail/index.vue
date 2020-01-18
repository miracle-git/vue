<template>
  <div class="product-detail-page">
    <nav-bar/>
    <m2-scroll class="content" ref="scroll">
      <swiper :items="banners"/>
      <product-info :data="product"/>
      <product-shop :data="shop"/>
      <product-image :data="images" @detailImageLoad="detailImageLoad"/>
      <product-param :data="params"/>
    </m2-scroll>
  </div>
</template>

<script>
  import { getProductDetail } from 'services/product.service'
  import { ProductInfoModel, ProductShopModel, ProductParamModel } from 'models/product'
  import { NavBar, Swiper, ProductInfo, ProductShop, ProductImage, ProductParam } from './children'

  export default {
    name: 'product-detail',
    data: () => ({
      banners: [],
      product: {},
      shop: {},
      images: {},
      params: {}
    }),
    computed: {
      id() {
        return this.$route.params.id
      }
    },
    created() {
      this.getProductDetail()
    },
    methods: {
      getProductDetail() {
        getProductDetail(this.id).then(res => {
          const { itemInfo, columns, shopInfo, detailInfo, itemParams } = res
          this.banners = itemInfo.topImages
          this.images = detailInfo
          this.product = new ProductInfoModel(itemInfo, columns, shopInfo.services)
          this.shop = new ProductShopModel(shopInfo)
          this.params = new ProductParamModel(itemParams.info, itemParams.rule)
        })
      },
      detailImageLoad() {
        this.$refs.scroll.refresh()
      }
    },
    components: {
      NavBar,
      Swiper,
      ProductInfo,
      ProductShop,
      ProductImage,
      ProductParam
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
