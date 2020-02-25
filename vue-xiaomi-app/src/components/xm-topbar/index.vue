<template>
  <div class="xm-topbar">
    <div class="container">
      <div class="topbar-left">
        <a href="/">小米商城</a>
        <a href="javascript:void(0);">MUI</a>
        <a href="javascript:void(0);">云服务</a>
        <a href="javascript:void(0);">协议规则</a>
      </div>
      <div class="topbar-right">
        <a href="/login">登录</a>
        <a href="javascript:void(0);" class="cart"><span class="icon-cart"></span>购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xm-topbar'
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
