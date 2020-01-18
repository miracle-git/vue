<template>
  <div class="home-page">
    <nav-bar/>
    <m2-scroll class="content"
               ref="scroll"
               @scroll="contentScroll">
      <swiper :items="banners"/>
      <recommend :items="recommends"/>
      <feature-view/>
      <tab-control :items="productTabs" @tabItemClick="tabItemClick"/>
      <product-list :items="productList"/>
    </m2-scroll>
    <m2-back-top @click.native="backTopClick" :visible="isShowBacktop"/>
  </div>
</template>

<script>
  import { EVENT_BUS_NAMES } from 'config/app.conf'
  import { getMultiData, getProductsData } from 'services/home.service'
  import { TabControl, ProductList } from 'components'
  import { NavBar, Swiper, Recommend, FeatureView } from './children'

  export default {
    data() {
      return {
        banners: [],
        recommends: [],
        products: {
          pop: { page: 0, text: '流行', list: [] },
          new: { page: 0, text: '新款', list: [] },
          sell: { page: 0, text: '精选', list: [] }
        },
        currentType: 'pop',
        isShowBacktop: false
      }
    },
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
    mounted() {
      this.loadImageRefresh()
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
          // this.$refs.scroll.finishPullUp()
        })
      },
      tabItemClick(type) {
        this.currentType = type
        console.log(type)
      },
      backTopClick() {
        this.$refs.scroll.scrollTop()
      },
      contentScroll(position) {
        this.isShowBacktop = -position.y > 1000
      },
      loadMoreData() {
        this.getProductsDataByType(this.currentType)
      },
      loadImageRefresh() {
        this.$bus.$on(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD, this.$bus.$debounce(this.$refs.scroll.refresh))
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
