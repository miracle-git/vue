<template>
  <div class="order page">
    Order Page
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'

  export default {
    created() {
      this.$bus.$emit(XM_APP_KEYS.updateOrderHeader, { title: '订单列表', tips: '请谨防钓鱼链接或诈骗电话，了解更多>' })
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
