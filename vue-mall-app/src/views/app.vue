<template>
  <div id="app">
    <m2-smart-route/>
    <tab-bar/>
    <app-icon/>
    <svg-icon/>
  </div>
</template>

<script>
  import { TabBar, SvgIcon } from 'components'

  export default {
    name: 'app',
    components: {
      TabBar,
      SvgIcon
    }
  }
</script>

<style lang="less">
  @import "~assets/css/base.less";
  @import "~m2-vue-ui/lib/theme/base.css";
</style>
