<template>
  <div class="payment-type">
    <h2 class="item-title">选择以下支付方式付款</h2>
    <div class="item-type">
      <h2 class="item-header">支付平台</h2>
      <div class="item-pay ali-pay"></div>
      <div class="item-pay wx-pay"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'payment-type',
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
