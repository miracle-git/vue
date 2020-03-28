<template>
  <div class="confirm-product-list">
    <div class="product-list">
      <h2 class="product-header">已购商品</h2>
      <ul class="product-items">
        <li v-for="(item, index) in products" :key="index">
          <div class="item-info">
            <img v-lazy="item.productMainImage" alt="">
            <span class="item-name ellipsis">{{item.productSubtitle}}</span>
          </div>
          <div class="item-price">
            {{item.productPrice | currency}} x {{item.quantity}}
          </div>
          <div class="item-total">
            {{item.productTotalPrice | currency}}
          </div>
        </li>
        <li class="no-data-item" v-if="!products.length">
          <span>购物车空空，赶快去购物吧！</span>
          <a href="/" class="btn btn-md btn-primary">继续购物</a>
        </li>
      </ul>
    </div>
    <div class="product-total">
      <div class="item-shipping">
        <h2>配送方式</h2>
        <span>包邮</span>
      </div>
      <div class="item-invoice">
        <h2>发票</h2>
        <span>电子发票</span>
        <span>个人</span>
      </div>
      <div class="item-detail">
        <div class="item">
          <span class="key">商品件数：</span>
          <span class="val">{{productCount}}件</span>
        </div>
        <div class="item">
          <span class="key">商品总价：</span>
          <span class="val">{{totalPrice | currency}}</span>
        </div>
        <div class="item">
          <span class="key">优惠活动：</span>
          <span class="val">0</span>
        </div>
        <div class="item">
          <span class="key">运费：</span>
          <span class="val">0</span>
        </div>
        <div class="item">
          <span class="key">应付总额：</span>
          <span class="val">{{totalPrice | currency}}</span>
        </div>
      </div>
    </div>
    <div class="product-action btn-group">
      <a href="/shopcart" class="btn btn-xl">返回购物车</a>
      <a href="javascript:void(0);" class="btn btn-xl btn-primary" @click="handleSubmitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'
  import { getCartList } from 'services/cart.service'
  import { createOrder } from 'services/order.service'

  export default {
    name: 'confirm-product-list',
    created() {
      this.updateShippingId()
      this.getCartList()
    },
    data: () => ({
      shippingId: null,
      products: [],
      totalPrice: 0,
      productCount: 0
    }),
    methods: {
      getCartList() {
        getCartList().then(res => {
          this.products = res.cartProductVoList.filter(item => item.productSelected)
          this.totalPrice = res.cartTotalPrice
          this.productCount = this.products.reduce((res, item) => res += item.quantity, 0)
        })
      },
      updateShippingId() {
        this.$bus.$on(XM_APP_KEYS.updateShippingId, (id) => this.shippingId = id)
      },
      handleSubmitOrder() {
        if (!this.shippingId) {
          this.$message.warning('请选择一个收货地址！')
          return
        }
        createOrder(this.shippingId).then(res => {
          this.$router.push({
            name: '/order/payment', // 必须配置路由name属性才可使用params对象传参
            params: {
              orderNo: res.orderNo
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
