<template>
  <div class="confirm-address-list">
    <h2 class="address-title">收货地址</h2>
    <div class="address-list clear-fix">
      <div class="address-item" v-for="(item, index) in addresses" :key="index">
        <div class="address-inner brick-item">
          <h2 class="name">{{item.receiverName}}</h2>
          <p class="phone">{{item.receiverMobile}}</p>
          <p class="addr">{{item.receiverAddress}}</p>
          <p class="action">
            <a href="javascript:void(0)" class="left">
              <m2-svg-icon name="delete"/>
            </a>
            <a href="javascript:void(0)" class="right">
              <m2-svg-icon name="edit"/>
            </a>
          </p>
        </div>
      </div>
      <div class="address-item create-item">
        <div class="address-inner brick-item">
          <a href="javascript:void(0)">
            <m2-svg-icon name="add"/>
            添加新地址
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getAddressList } from 'services/order.service'

  export default {
    name: 'confirm-address-list',
    data: () => ({
      addresses: []
    }),
    created() {
      this.getAddressList()
    },
    methods: {
      getAddressList() {
        getAddressList().then(res => {
          this.addresses = res.list
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
