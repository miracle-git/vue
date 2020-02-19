<template>
  <div class="xm-bottom-bar">
    <ul>
      <li class="service-item" v-for="(item, index) in serviceItems" :key="index">
        <span :class="item.icon"></span> {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { BOTTOM_BAR_ITEMS } from 'config/app.conf'

  export default {
    name: 'xm-bottom-bar',
    data: () => ({
      serviceItems: BOTTOM_BAR_ITEMS
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
