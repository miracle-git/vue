<template>
  <div class="xm-number-box">
    <a href="javascript:void(0)" class="minus" :class="{'disabled':data.quantity===1}" @click="$emit('minus')">-</a>
    <span>{{data.quantity}}</span>
    <a href="javascript:void(0)" class="plus" :class="{'disabled':data.quantity>data.productStock}" @click="$emit('plus')">+</a>
  </div>
</template>

<script>
  export default {
    name: 'xm-number-box',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
