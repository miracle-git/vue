<template>
  <div class="vm-header">
    <span class="icon"></span>
    <h1 class="text">My Music</h1>
    <router-link class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'vm-header'
  }
</script>

<style lang="scss">
  @import "./index";
</style>
