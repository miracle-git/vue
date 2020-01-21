<template>
  <div class="product-detail-page">
    <nav-bar @titleClick="navTitleClick" ref="navbar"/>
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
    <bottom-bar :data="cart"/>
  </div>
</template>

<script>
  import { ImageLoadMixin, BackTopMixin } from 'mixins'
  import { getProductDetail } from 'services/product.service'
  import { ProductInfoModel, ProductShopModel, ProductParamModel, ProductCartModel } from 'models'
  import { ProductList } from 'components'
  import { NavBar, BottomBar, Swiper, ProductInfo, ProductShop, ProductImage, ProductParam, ProductComment } from './children'

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
      navTitleTopYs: [],
      currentIndex: 0
    }),
    computed: {
      id() {
        return this.$route.params.id
      },
      cart() {
        return new ProductCartModel(this.banners, this.product)
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
          this.product = new ProductInfoModel(this.id, itemInfo, columns, shopInfo.services)
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
        const pos = -position.y
        const top = this.navTitleTopYs
        // 1.判断BackTop是否显示
        this.showBacktop(pos)
        // 2.滚动内容动态切换标题
        for (let i = 0, len = top.length; i < len - 1; i++) {
          if (this.currentIndex !== i && pos >= top[i] && pos < top[i + 1]) {
            this.currentIndex = i
            this.$refs.navbar.currentIndex = i
          }
        }
      },
      navTitleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.navTitleTopYs[index])
      },
      getNavTitleTopYs() {
        const titles = ['product', 'param', 'comment', 'recommend']
        titles.map(item => this.navTitleTopYs.push(this.$refs[item] ? this.$refs[item].$el.offsetTop : 0))
        this.navTitleTopYs.push(Number.MAX_SAFE_INTEGER)
      }
    },
    components: {
      NavBar,
      BottomBar,
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
