<template>
  <div class="xm-header">
    <xm-topbar/>
    <div class="container">
      <div class="header-logo">
        <a href="/"></a>
      </div>
      <div class="header-menu">
        <div class="menu-item">
          <h2 class="title">小米手机</h2>
          <div class="items"></div>
        </div>
        <div class="menu-item">
          <h2 class="title">红米手机</h2>
          <div class="items"></div>
        </div>
        <div class="menu-item">
          <h2 class="title">小米电视</h2>
          <div class="items"></div>
        </div>
      </div>
      <div class="header-search">
        <div class="search-box">
          <input type="text" class="keyword"/>
          <a href="javascript:void(0);" class="search"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XmTopbar from '../xm-topbar'

  export default {
    name: 'xm-header',
    components: {
      XmTopbar
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
