<template>
  <div class="product-comment" v-if="isShowComponent">
    <div class="comment-header">
      <div class="title left">用户评价</div>
      <div class="more right">更多 <i class="arrow-right"></i></div>
    </div>
    <div class="comment-user">
      <img :src="data.user.avatar" alt=""/>
      <span class="text">{{data.user.uname}}</span>
    </div>
    <div class="comment-detail">
      <p class="content">{{data.content}}</p>
      <div class="other">
        <span class="date">{{data.created | datetime }}</span>
        <span>{{data.style}}</span>
      </div>
      <div class="comment-imgs">
        <img v-for="(item, index) in data.images" :src="item" :key="index" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckDataMixin } from 'mixins'

  export default {
    name: 'product-comment',
    mixins: [CheckDataMixin]
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
