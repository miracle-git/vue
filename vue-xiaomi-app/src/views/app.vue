<template>
  <div id="app">
    <m2-route-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { XM_APP_KEYS } from 'config/app.conf'
  import { getAppData } from 'services/data.service'

  export default {
    name: 'app',
    created() {
      this.getAppData() // 防止页面刷新，登录状态消失
      this.$bus.$on(XM_APP_KEYS.getAppData, this.getAppData)
    },
    methods: {
      ...mapActions(['saveUserInfo', 'saveCartNum']),
      getAppData() {
        const isLogin = this.$cookie.get(XM_APP_KEYS.loginUserId)
        if (isLogin) {
          getAppData().then(([user, cart]) => {
            this.saveUserInfo(user.username)
            this.saveCartNum(cart)
          })
        }
      }
    }
  }
</script>

<style lang="less">
  @import "~assets/css/base.less";
  @import "~m2-ui/lib/theme-grace/index.css";
  @import "~element-ui/lib/theme-chalk/index.css";
</style>
