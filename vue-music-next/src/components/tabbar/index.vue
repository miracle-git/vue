<template>
  <div class="vm-tabbar">
    <router-link class="tabbar-item" v-for="item in list" :key="item.path" :to="item.path">
      <span class="tabbar-item-link">{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
  import { reactive, defineComponent } from 'vue'
  import { TabbarList } from '@/config/constant.conf'

  export default defineComponent({
    name: 'vm-tabbar',
    setup() {
      return {
        list: reactive(TabbarList)
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
