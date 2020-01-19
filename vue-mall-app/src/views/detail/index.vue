<template>
  <div class="product-detail-page">
    <nav-bar @titleClick="navTitleClick"/>
    <m2-scroll class="content" ref="scroll" @scroll="contentScroll">
      <swiper :items="banners"/>
      <product-info :data="product"/>
      <product-shop :data="shop"/>
      <product-image :data="images" @detailImageLoad="detailImageLoad"/>
      <product-param :data="params" ref="param"/>
      <product-comment :data="comment" ref="comment"/>
      <product-list :items="recommends" ref="recommend"/>
    </m2-scroll>
    <m2-back-top @click.native="backTopClick" v-show="isShowBacktop"/>
  </div>
</template>

<script>
  import { ImageLoadMixin, BackTopMixin } from 'mixins'
  import { getProductDetail } from 'services/product.service'
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
      recommends: [],
      navTitleTopYs: []
    }),
    computed: {
      id() {
        return this.$route.params.id
      }
    },
    created() {
      this.getProductDetail()
    },
    destroyed() {
      this.cancelImageListener()
    },
    methods: {
      getProductDetail() {
        getProductDetail(this.id).then(([product, recommend]) => {
          const { itemInfo, columns, shopInfo, detailInfo, itemParams, rate } = product
          this.banners = itemInfo.topImages
          this.images = detailInfo
          this.product = new ProductInfoModel(itemInfo, columns, shopInfo.services)
          this.shop = new ProductShopModel(shopInfo)
          this.params = new ProductParamModel(itemParams.info, itemParams.rule)
          this.comment = rate.cRate > 0 ? rate.list[0] : {}
          this.recommends = recommend.list
        })
      },
      detailImageLoad() {
        this.$refs.scroll.refresh()
        this.getNavTitleTopYs()
      },
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.showBacktop(position)
      },
      navTitleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.navTitleTopYs[index])
      },
      getNavTitleTopYs() {
        const titles = ['product', 'param', 'comment', 'recommend']
        titles.map(item => this.navTitleTopYs.push(this.$refs[item] ? this.$refs[item].$el.offsetTop : 0))
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
