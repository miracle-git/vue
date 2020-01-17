<template>
  <div class="tab-control">
    <div v-for="(item, index) in items"
         :key="item.type"
         :class="{'active': currentIndex === index}"
         class="tab-control-item"
         @click="itemClick(item.type, index)">
      <span class="item-text">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tab-control',
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(type, index) {
        this.currentIndex = index
        this.$emit('tabItemClick', type)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
