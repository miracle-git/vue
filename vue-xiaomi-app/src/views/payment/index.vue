<template>
  <div class="payment-page">
    <div class="container">
      <div class="wrapper">
        <payment-order/>
        <payment-type/>
      </div>
    </div>
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'
  import { PaymentOrder, PaymentType } from './children'

  export default {
    created() {
      this.$bus.$emit(XM_APP_KEYS.updateOrderHeader, { title: '订单支付', tips: '请谨防钓鱼链接或诈骗电话，了解更多>' })
    },
    components: {
      PaymentOrder,
      PaymentType
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
