<template>
  <m2-nav-bar class="nav-bar">
    <div slot="left" class="back" @click="$router.go(-1)">
      <img src="~assets/img/common/back.svg" class="back-icon" alt=""/>
    </div>
    <div slot="center" class="title">
      <p v-for="(item, index) in titles" :key="item.key" :class="{'active':current === index}"
         @click="current = index" class="title-item">
        {{item.value}}
      </p>
    </div>
  </m2-nav-bar>
</template>

<script>
  import { DETAIL_NAV_BAR_DATA } from 'config/app.conf'

  export default {
    name: 'nav-bar',
    data: () => ({
      titles: DETAIL_NAV_BAR_DATA,
      current: 0
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
