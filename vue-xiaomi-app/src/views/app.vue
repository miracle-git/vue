<template>
  <div id="app">
    <m2-smart-route/>
  </div>
</template>

<script>
  import { getAppData } from 'services/data.service'

  export default {
    name: 'app',
    created() {
      getAppData().then(([user, cart]) => {
        console.log(user)
        console.log(cart)
      })
    }
  }
</script>

<style lang="less">
  @import "~assets/css/base.less";
  @import "~m2-vue-ui/lib/theme/base.css";
</style>
