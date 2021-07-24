<template>
  <div class="vm-tabbar">
    <router-link class="tabbar-item" v-for="item in list" :key="item.path" :to="item.path">
      <span class="tabbar-item-link">{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
  import { reactive, defineComponent } from 'vue'
  import { TABBAR_LIST } from '@/config/component.config'

  export default defineComponent({
    name: 'vm-tabbar',
    setup() {
      return {
        list: reactive(TABBAR_LIST)
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
