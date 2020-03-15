<template>
  <div class="shopcart-list">
    <div class="container">
      <div class="cart-box">
        <ul class="cart-item-head">
          <li class="col-check">
            <span class="checkbox" :class="{'checked':checkedAll}" @click="handleSelectAll" v-if="cartList.length"></span>
          </li>
          <li class="col-3">商品</li>
          <li class="col-1">单价</li>
          <li class="col-2">数量</li>
          <li class="col-1">小计</li>
          <li class="col-1">操作</li>
        </ul>
        <ul class="cart-item-list">
          <shopcart-item v-for="(item, index) in cartList" :key="index" :data="item"
                         @update="handleUpdateCart" @delete="handleDeleteCart"/>
          <li class="no-data-item" v-if="!cartList.length">
            <span>购物车空空，赶快去购物吧！</span>
            <a href="/" class="btn btn-md btn-primary">继续购物</a>
          </li>
        </ul>
        <div class="cart-item-total clear-fix" :class="{'fixed-bottom':isFixed}" v-if="cartList.length">
          <div class="left">
            <a href="/" class="buy">继续购物</a>
            <p>共<span>{{cartList.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件</p>
          </div>
          <div class="right">
            <p class="total" v-if="isCheckedCart">合计：<span>{{totalPrice | currency}}</span></p>
            <a href="javascript:void(0)" class="btn btn-xl btn-primary"
               :class="{'btn-disabled':!isCheckedCart}" @click="handlePayCart">去结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { DataEvent } from 'm2-core'
  import { fixed } from 'm2-vue'
  import { getCartList, selectAll, updateCart, deleteCart } from 'services/cart.service'
  import ShopcartItem from '../shopcart-item'

  export default {
    name: 'shopcart-list',
    mixins: [fixed],
    data: () => ({
      cartList: [],
      totalPrice: 0,
      checkedNum: 0,
      checkedAll: false,
      fixedConfig: {
        direction: 'bottom',
        scrollTop: 320
      }
    }),
    computed: {
      isCheckedCart() {
        return this.cartList.find(item => item.productSelected)
      }
    },
    created() {
      this.getCartList()
    },
    methods: {
      getCartList() {
        getCartList().then(res => this.handleCartData(res))
      },
      handleSelectAll() {
        selectAll(this.checkedAll).then(res => this.handleCartData(res))
      },
      handleUpdateCart: DataEvent.debounce(({ item, action, vm }) => {
        let selected
        switch (action) {
          case 'minus':
            if (item.quantity === 1) return
            --item.quantity
            break
          case 'plus':
            if (item.quantity > item.productStock) return
            ++item.quantity
            break
          default:
            selected = !item.productSelected
        }
        updateCart(item.productId, item.quantity, selected).then(res => vm.handleCartData(res))
      }),
      handleDeleteCart(id) {
        deleteCart(id).then(res => this.handleCartData(res))
      },
      handleCartData(data) {
        const { cartProductVoList, cartTotalPrice, selectedAll } = data
        this.cartList = cartProductVoList
        this.totalPrice = cartTotalPrice
        this.checkedAll = selectedAll
        this.checkedNum = this.cartList.filter(item => item.productSelected).length
      },
      handlePayCart() {
        if (!this.isCheckedCart) return
        this.$router.push('/order/confirm')
      }
    },
    components: {
      ShopcartItem
    }
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
