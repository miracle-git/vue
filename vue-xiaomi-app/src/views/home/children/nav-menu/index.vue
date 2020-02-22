<template>
  <div class="nav-menu">
    <ul>
      <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
        <a :href="item.url" target="_blank">
          {{item.text}}
        </a>
        <div class="children" v-if="menuListItems[item.id]">
          <ul v-for="(mItem, mIndex) in menuListItems[item.id]" :key="mIndex">
            <li v-for="(cItem, cIndex) in mItem" :key="cIndex">
              <a :href="`/product/${cItem.id}`" target="_blank">
                <img v-lazy="cItem.url" alt="">
                {{cItem.text}}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { NAV_MENU_ITEMS, NAV_MENU_LIST_ITEMS } from 'config/app.conf'

  export default {
    name: 'nav-menu',
    data: () => ({
      menuItems: NAV_MENU_ITEMS,
      menuListItems: NAV_MENU_LIST_ITEMS
    })
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
