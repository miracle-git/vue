<template>
  <div class="product-image" v-if="isShowComponent">
    <div class="product-info clear-fix">
      <div class="start left"></div>
      <div class="desc">{{data.desc}}</div>
      <div class="end right"></div>
    </div>
    <div class="product-key">{{detail.key}}</div>
    <div class="product-img-list">
      <img v-for="(item, index) in detail.list" :key="index" :src="item" @load="detailImageLoad" alt=""/>
    </div>
  </div>
</template>

<script>
  import { CheckDataMixin } from 'mixins'

  export default {
    name: 'product-image',
    data: () => ({
      counter: 0
    }),
    computed: {
      detail() {
        return this.data.detailImage[0]
      }
    },
    mixins: [CheckDataMixin],
    methods: {
      detailImageLoad() {
        if (++this.counter === this.detail.list.length) {
          this.$emit('detailImageLoad')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
