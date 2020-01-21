<template>
  <div class="profile-page">
    <nav-bar/>
    <user-account/>
    <user-info/>
    <list-view :items="orderList"/>
    <list-view :items="serviceList"/>
  </div>
</template>

<script>
  import { PROFILE_ORDER_LIST, PROFILE_SERVICE_LIST } from 'config/app.conf'
  import { NavBar, UserAccount, UserInfo, ListView } from './children'

  export default {
    data: () => ({
      orderList: PROFILE_ORDER_LIST,
      serviceList: PROFILE_SERVICE_LIST
    }),
    components: {
      NavBar,
      UserAccount,
      UserInfo,
      ListView
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
