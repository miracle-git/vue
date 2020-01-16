<template>
  <div class="m2-nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  import './index.less'
  export default {
    name: 'm2-nav-bar'
  }
</script>
