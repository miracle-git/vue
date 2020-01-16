<template>
  <div id="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script>
  import { TabBar } from 'components'

  export default {
    name: 'app',
    components: {
      TabBar
    }
  }
</script>

<style>
  @import "~assets/css/base.css";
  @import "~m2-vue-ui/lib/theme/base.css";
</style>
