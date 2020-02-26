<template>
  <div class="home-product-list">
    <div class="container">
      <h2 class="title">手机</h2>
      <div class="wrapper">
        <div class="product-banner">
          <a :href="`/product/${banner.id}`">
            <img v-lazy="banner.url" :alt="banner.desc">
          </a>
        </div>
        <div class="product-list">
          <div class="product-item brick-item" v-for="(item, index) in products" :key="index">
            <div @click="$router.push(`/product/${item.id}`)">
              <div class="item-tag">
                <span class="item-tag-inner" :class="item.tag.cls">{{item.tag.text}}</span>
              </div>
              <div class="item-image">
                <img v-lazy="item.url" :alt="item.desc">
              </div>
              <div class="item-info">
                <p class="item-name ellipsis">{{item.name}}</p>
                <p class="item-desc ellipsis">{{item.desc}}</p>
                <p class="item-price" @click.stop="addToCart(item.id)">{{item.price | currency}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getProductList } from 'services/product.service'
  // import { addToCart } from 'services/cart.service'
  import { BANNER_LIST_ITEMS, XM_APP_KEYS } from 'config/app.conf'
  export default {
    name: 'home-product-list',
    data: () => ({
      banner: BANNER_LIST_ITEMS[1],
      products: []
    }),
    created() {
      this.getProductList()
    },
    methods: {
      getProductList() {
        getProductList('100012', 14).then(res => {
          this.products = res.list.slice(6, 14).map(item => ({
            id: item.id,
            name: item.name,
            desc: item.subtitle,
            url: item.mainImage,
            price: item.price,
            tag: this.getTagDetails(item)
          }))
        })
      },
      getTagDetails(item) {
        switch (item.id % 3) {
          case 0:
            return { cls: 'new', text: '新品' }
          case 1:
            return { cls: 'hot', text: '热卖' }
          case 2:
            return { cls: '', text: '' }
        }
      },
      addToCart() {
        this.$bus.$emit(XM_APP_KEYS.addToCart)
        // addToCart(id).then(res => {
        //   console.log(res)
        // })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
