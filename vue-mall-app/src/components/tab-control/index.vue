<template>
  <div class="tab-control">
    <div v-for="item in items"
         :key="item.type"
         :class="{'active': current === item.type}"
         class="tab-control-item"
         @click="itemClick(item.type)">
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
      },
      current: {
        type: String,
        default: ''
      }
    },
    methods: {
      itemClick(type) {
        this.$emit('tabItemClick', type)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
