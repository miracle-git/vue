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
        <a href="/login" v-if="!userName">登录</a>
        <span v-else>
          <span class="username">{{userName}}</span>
          <a href="javascript:void(0);">退出</a>
          <a href="javascript:void(0);">我的订单</a>
        </span>
        <a href="javascript:void(0);" class="cart"><span class="icon-cart"></span>购物车<span v-if="cartNum">({{cartNum}})</span></a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'xm-topbar',
    computed: {
      ...mapState(['userName', 'cartNum'])
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
