<template>
  <div id="app">
    <m2-router-view/>
    <tab-bar/>
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
  @import "~m2-ui/lib/theme-grace/index.css";
</style>
