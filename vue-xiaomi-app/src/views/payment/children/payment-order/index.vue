<template>
  <div class="payment-order">
    <div class="order-item">
      <div class="order-success"></div>
      <div class="order-info">
        <h2 class="item-title">订单提交成功！去付款咯～</h2>
        <p class="item-message">请在<span>30分钟</span>内完成支付, 超时后将取消订单</p>
        <div>收货信息：{{addressInfo}}</div>
      </div>
      <div class="order-total">
        <div class="total-info">应付总额：<span class="price">2000</span></div>
        <div>订单详情 <i class="icon-down" @click="showDetail=!showDetail" :class="{'up':showDetail}"></i></div>
      </div>
    </div>
    <div class="order-detail" v-show="showDetail">
      <div class="item">
        <div class="item-title">订单号：</div>
        <div class="item-content">{{orderNo}}</div>
      </div>
      <div class="item">
        <div class="item-title">收货信息：</div>
        <div class="item-content">张 13941766532 北京 北京 北京 123131</div>
      </div>
      <div class="item products">
        <div class="item-title">商品名称：</div>
        <div class="item-content">
          <ul>
            <li v-for="(item, index) in productList" :key="index">
              <img v-lazy="item.productImage" :alt="item.productName">{{item.productName}}
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="item-title">发票信息：</div>
        <div class="item-content">电子发票 个人</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getOrderDetail } from 'services/order.service'

  export default {
    name: 'payment-order',
    created() {
      this.getOrderDetail()
    },
    data() {
      return {
        showDetail: false,
        addressInfo: '',
        productList: []
      }
    },
    computed: {
      orderNo() {
        return '1587836726285'
        // return this.$route.params.orderNo
      }
    },
    methods: {
      getOrderDetail() {
        if (!this.orderNo) return
        getOrderDetail(this.orderNo).then(res => {
          const { shippingVo, orderItemVoList } = res
          const { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress } = shippingVo
          this.addressInfo = `${receiverName} ${receiverMobile} ${receiverProvince} ${receiverCity} ${receiverDistrict} ${receiverAddress}`
          this.productList = orderItemVoList
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
