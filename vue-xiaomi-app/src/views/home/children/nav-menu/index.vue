<template>
  <div class="nav-menu">
    <ul>
      <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
        <a :href="item.url" target="_blank">
          {{item.text}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { NAV_MENU_ITEMS } from 'config/app.conf'

  export default {
    name: 'nav-menu',
    data: () => ({
      menuItems: NAV_MENU_ITEMS
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
