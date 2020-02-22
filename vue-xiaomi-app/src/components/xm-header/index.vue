<template>
  <div class="xm-header">
    <xm-topbar/>
    <div class="container">
      <div class="header-logo">
        <a href="/"></a>
      </div>
      <div class="header-menu">
        <div class="menu-item" v-for="item in productNavItems" :key="item.type">
          <h2 class="title">{{item.title}}</h2>
          <div class="children" v-if="item.children && item.children.length">
            <ul>
              <li class="product" v-for="(child, index) in item.children" :key="index">
                <a :href="getProductLink(child.id)" :target="child.id?'_blank':'_self'">
                  <div class="item-img">
                    <img v-lazy="child.url" alt="">
                  </div>
                  <div class="item-name">{{child.name}}</div>
                  <div class="item-price">{{child.price | currency}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-search">
        <div class="search-box">
          <input type="text" class="keyword" placeholder="小米9 Pro、红米 Note 7"/>
          <a href="javascript:void(0);" class="search"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getProductList } from 'services/product.service'
  import { PRODUCT_NAV_ITEMS } from 'config/app.conf'
  import XmTopbar from '../xm-topbar'

  export default {
    name: 'xm-header',
    data: () => ({
      productNavItems: PRODUCT_NAV_ITEMS
    }),
    created() {
      this.getProductList()
    },
    methods: {
      getProductList() {
        getProductList('100012', 6).then(res => {
          const xiaomi = PRODUCT_NAV_ITEMS.find(item => item.type === 'xiaomi')
          if (xiaomi) {
            xiaomi.children = res.list.map(item => ({
              id: item.id,
              url: item.mainImage,
              name: item.name,
              price: item.price
            }))
          }
        })
      },
      getProductLink(id) {
        return id ? `/product/${id}` : '/'
      }
    },
    components: {
      XmTopbar
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
