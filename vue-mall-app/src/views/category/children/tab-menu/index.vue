<template>
  <m2-scroll class="tab-menu">
    <div class="menu-list">
      <div v-for="(item, index) in items"
           class="menu-item"
           :class="{'active':index===currentIndex}"
           :key="index"
           @click="tabItemClick(index)">
        {{item.title}}
      </div>
    </div>
  </m2-scroll>
</template>

<script>
  export default {
    name: 'tab-menu',
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data: () => ({
      currentIndex: 0
    }),
    methods: {
      tabItemClick(index) {
        this.currentIndex = index
        this.$emit('tabItemClick', index)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
