<template>
  <section class="user-account">
    <div class="account-item">
      <div class="number">
        <span class="balance">100</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">2</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">50</span>分
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'user-account'
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
