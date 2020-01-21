<template>
  <div class="list-view">
    <div v-for="(item, index) in items" :key="index" class="item">
      <span class="icon">
        <svg :fill="item.color"><use :xlink:href="item.icon"></use></svg>
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-view',
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
