<template>
  <div class="confirm-page">
    <div class="container">
      <div class="wrapper">
        <confirm-address-list/>
        <confirm-product-list/>
      </div>
    </div>
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'
  import { ConfirmAddressList, ConfirmProductList } from './children'

  export default {
    created() {
      this.$bus.$emit(XM_APP_KEYS.updateOrderHeader, { title: '订单确认', tips: '请认真填写收货地址！' })
    },
    components: {
      ConfirmAddressList,
      ConfirmProductList
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
