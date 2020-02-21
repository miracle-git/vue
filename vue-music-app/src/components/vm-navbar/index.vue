<template>
  <div class="vm-navbar">
    <router-link tag="div" class="nav-item" to="/recommend">
      <span class="nav-link">推荐</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/singer">
      <span class="nav-link">歌手</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/rank">
      <span class="nav-link">排行</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="nav-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@assets/stylus/variable"

  .vm-navbar
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .nav-item
      flex: 1
      text-align: center
      .nav-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .nav-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
