<template>
  <div class="home-page padding-bar">
    <nav-bar/>
    <swiper :items="banners"/>
    <recommend :items="recommends"/>
    <feature-view/>
    <tab-control :items="productTabs" @tabItemClick="tabItemClick"/>
    <product-list :items="productList"/>
  </div>
</template>

<script>
  import { getMultiData, getProductsData } from 'services/home.service'
  import { TabControl, ProductList } from 'components'
  import { NavBar, Swiper, Recommend, FeatureView } from './children'

  export default {
    data() {
      return {
        banners: [],
        recommends: [],
        products: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        },
        currentType: 'pop',
        productTypes: ['流行', '新款', '精选']
      }
    },
    computed: {
      productList() {
        return this.products[this.currentType].list
      },
      productTabs() {
        return Object.keys(this.products).map((item, index) => ({
          type: item,
          text: this.productTypes[index]
        }))
      }
    },
    created() {
      this.getMultiData()
      this.getProductsData()
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
        })
      },
      tabItemClick(type) {
        console.log(type)
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
