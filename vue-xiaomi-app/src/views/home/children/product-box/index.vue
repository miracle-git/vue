<template>
  <div class="product-box">
    <div class="container">
      <h2 class="title">手机</h2>
      <div class="wrapper">
        <div class="product-banner">
          <a :href="`/product/${banner.id}`" target="_blank">
            <img :src="banner.url" :alt="banner.desc">
          </a>
        </div>
        <div class="product-list">
          <div class="product-item brick-item" v-for="(item, index) in products" :key="index">
            <a :href="`/product/${item.id}`" target="_blank">
              <span class="item-tag" :class="item.tag.cls">{{item.tag.text}}</span>
              <div class="item-image">
                <img :src="item.url" :alt="item.desc">
              </div>
              <div class="item-info">
                <p class="item-name ellipsis">{{item.name}}</p>
                <p class="item-desc ellipsis">{{item.desc}}</p>
                <p class="item-price">{{item.price | currency}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getProductList } from 'services/product.service'
  import { BANNER_LIST_ITEMS } from 'config/app.conf'
  export default {
    name: 'product-box',
    data: () => ({
      banner: BANNER_LIST_ITEMS[1],
      products: []
    }),
    created() {
      this.getProductList()
    },
    methods: {
      getProductList() {
        getProductList('100012', 8).then(res => {
          this.products = res.list.map(item => ({
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
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
