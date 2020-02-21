<template>
  <div id="app">
    <vm-header></vm-header>
    <vm-navbar></vm-navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import VmHeader from '@components/vm-header'
  import VmNavbar from '@components/vm-navbar'

  export default {
    components: {
      VmHeader,
      VmNavbar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
