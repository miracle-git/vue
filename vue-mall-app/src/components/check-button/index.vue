<template>
  <div class="check-button" :class="{'active': checked}">
    <img src="~assets/img/common/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'check-button',
    props: {
      checked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
