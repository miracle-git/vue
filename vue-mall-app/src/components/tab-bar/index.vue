<template>
  <m2-tab-bar>
    <m2-tab-bar-item v-for="(item, index) in items"
                     :key="index" :path="item.path">
      <img slot="item-icon" :src="item.icon" alt="" />
      <img slot="item-icon-active" :src="item.activeIcon" alt="" />
      <span slot="item-text">{{item.text}}</span>
    </m2-tab-bar-item>
  </m2-tab-bar>
</template>

<script>
  import { TAB_BAR_DATA } from 'config/app.conf'

  export default {
    name: 'tab-bar',
    data: () => ({
      items: TAB_BAR_DATA
    })
  }
</script>
