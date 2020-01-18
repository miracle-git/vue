<template>
  <div class="product-detail-page">
    <nav-bar/>
    <m2-scroll class="content" ref="scroll" @scroll="contentScroll">
      <swiper :items="banners"/>
      <product-info :data="product"/>
      <product-shop :data="shop"/>
      <product-image :data="images" @detailImageLoad="detailImageLoad"/>
      <product-param :data="params"/>
      <product-comment :data="comment"/>
      <product-list :items="recommends"/>
    </m2-scroll>
    <m2-back-top @click.native="backTopClick" v-show="isShowBacktop"/>
  </div>
</template>

<script>
  import { ImageLoadMixin, BackTopMixin } from 'mixins'
  import { getProductDetail, getProductRecommend } from 'services/product.service'
  import { ProductInfoModel, ProductShopModel, ProductParamModel } from 'models/product'
  import { ProductList } from 'components'
  import { NavBar, Swiper, ProductInfo, ProductShop, ProductImage, ProductParam, ProductComment } from './children'

  export default {
    mixins: [ImageLoadMixin, BackTopMixin],
    data: () => ({
      banners: [],
      product: {},
      shop: {},
      images: {},
      params: {},
      comment: {},
      recommends: []
    }),
    computed: {
      id() {
        return this.$route.params.id
      }
    },
    created() {
      this.getProductDetail()
      this.getProductRecommend()
    },
    destroyed() {
      this.cancelImageListener()
    },
    methods: {
      getProductDetail() {
        getProductDetail(this.id).then(res => {
          const { itemInfo, columns, shopInfo, detailInfo, itemParams, rate } = res
          this.banners = itemInfo.topImages
          this.images = detailInfo
          this.product = new ProductInfoModel(itemInfo, columns, shopInfo.services)
          this.shop = new ProductShopModel(shopInfo)
          this.params = new ProductParamModel(itemParams.info, itemParams.rule)
          this.comment = rate.cRate > 0 ? rate.list[0] : {}
        })
      },
      getProductRecommend() {
        getProductRecommend().then(res => {
          this.recommends = res.list
        })
      },
      detailImageLoad() {
        this.$refs.scroll.refresh()
      },
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.showBacktop(position)
      }
    },
    components: {
      NavBar,
      Swiper,
      ProductInfo,
      ProductShop,
      ProductImage,
      ProductParam,
      ProductComment,
      ProductList
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
