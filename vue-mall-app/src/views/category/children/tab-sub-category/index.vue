<template>
  <div class="tab-sub-category" v-if="items.length">
    <m2-grid-view :cols="3" :v-margin="20" :line-spacing="15">
      <div class="cate-item" v-for="(item, index) in items" :key="index">
        <a :href="item.link">
          <img v-lazy="item.image" class="item-img" alt=""/>
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </m2-grid-view>
  </div>
</template>

<script>
  export default {
    name: 'tab-sub-category',
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
