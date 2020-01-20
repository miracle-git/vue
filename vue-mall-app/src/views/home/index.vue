<template>
  <div class="home-page">
    <nav-bar/>
    <tab-control :items="productTabs" :current="currentType"
                 @tabItemClick="tabItemClick" v-show="isShowTabControl"
                 class="tab-control"/>
    <m2-scroll class="content" ref="scroll"
               @scroll="contentScroll" @pullingUp="loadMoreData">
      <swiper :items="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend :items="recommends"/>
      <feature-view/>
      <tab-control :items="productTabs" :current="currentType"
                   @tabItemClick="tabItemClick" ref="tabControl"/>
      <product-list :items="productList"/>
    </m2-scroll>
    <m2-back-top @click.native="backTopClick" v-show="isShowBacktop"/>
  </div>
</template>

<script>
  import { ImageLoadMixin, BackTopMixin } from 'mixins'
  import { getMultiData, getProductsData } from 'services/home.service'
  import { TabControl, ProductList } from 'components'
  import { NavBar, Swiper, Recommend, FeatureView } from './children'

  export default {
    mixins: [ImageLoadMixin, BackTopMixin],
    data: () => ({
      banners: [],
      recommends: [],
      products: {
        pop: { page: 0, text: '流行', list: [] },
        new: { page: 0, text: '新款', list: [] },
        sell: { page: 0, text: '精选', list: [] }
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      currentScrollY: 0,
      isShowTabControl: false
    }),
    computed: {
      productList() {
        return this.products[this.currentType].list
      },
      productTabs() {
        return Object.entries(this.products).map(([key, val]) => ({
          type: key,
          text: val.text
        }))
      }
    },
    created() {
      this.getMultiData()
      this.getProductsData()
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.currentScrollY, 0).refresh()
    },
    deactivated() {
      // 1.保存当前滚动位置
      this.currentScrollY = this.$refs.scroll.getScrollY()
      // 2.取消全局事件监听
      this.cancelImageListener()
    },
    methods: {
      getMultiData() {
        getMultiData().then(res => {
          this.banners = res.banner.list
          this.recommends = res.recommend.list
        })
      },
      getProductsData() {
        Object.keys(this.products).forEach(item => this.getProductsDataByType(item))
      },
      getProductsDataByType(type) {
        const productItem = this.products[type]
        getProductsData(type, productItem.page + 1).then(res => {
          productItem.list.push(...res.list)
          productItem.page++
          // 启动加载更多
          this.$refs.scroll.finishPullUp()
        })
      },
      tabItemClick(type) {
        this.currentType = type
      },
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.showBacktop(-position.y)
        // 2.判断TabControl是否吸顶
        this.isShowTabControl = -position.y > this.tabOffsetTop
      },
      loadMoreData() {
        this.getProductsDataByType(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      }
    },
    components: {
      TabControl,
      ProductList,
      NavBar,
      Swiper,
      Recommend,
      FeatureView
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
