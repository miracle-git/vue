<template>
  <div class="vm-tabbar">
    <router-link class="item" v-for="(item,index) in list" :key="index" :to="item.path">
      <span class="link">{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  import { TabbarList } from '@/config/constant.conf'

  export default {
    name: 'vm-tabbar',
    setup() {
      return {
        list: reactive(TabbarList)
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
