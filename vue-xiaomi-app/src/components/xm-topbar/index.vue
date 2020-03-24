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
          <a href="javascript:void(0);" @click="handleLogout">退出</a>
          <a href="javascript:void(0);">我的订单</a>
        </span>
        <a href="/shopcart" class="cart"><span class="icon-cart"></span>购物车<span v-if="cartNum">({{cartNum}})</span></a>
      </div>
    </div>
  </div>
</template>

<script>
  import { logout } from 'services/user.service'
  import { XM_APP_KEYS } from 'config/app.conf'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'xm-topbar',
    computed: {
      ...mapState(['userName', 'cartNum'])
    },
    methods: {
      ...mapActions(['saveUserInfo', 'saveCartNum']),
      handleLogout() {
        logout().then(_ => {
          this.$cookie.set(XM_APP_KEYS.loginUserId, '', { expires: '-1' })
          this.saveUserInfo('')
          this.saveCartNum(0)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
