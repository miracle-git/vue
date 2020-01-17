<template>
  <div class="recommend">
    <div v-for="(item, index) in items" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p class="item-title">{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
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
