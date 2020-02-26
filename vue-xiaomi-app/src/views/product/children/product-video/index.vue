<template>
  <div class="product-video">
    <div class="container">
      <h2 class="item-title">60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
      <p class="item-desc">后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
      <div class="item-video">
        <div class="video-bg" @click="handleOpenVideo"></div>
        <div class="mask" v-show="showVideo"></div>
        <div class="video-box" :class="{'slide':showVideo}">
          <span class="icon-close" @click="handleCloseVideo"></span>
          <video ref="video" src="~assets/img/products/video.mp4" muted autoplay controls loop/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-video',
    data: () => ({
      showVideo: false
    }),
    methods: {
      handleOpenVideo() {
        this.showVideo = true
        this.$refs.video.currentTime = 0
        this.$refs.video.play()
      },
      handleCloseVideo() {
        this.showVideo = false
        this.$refs.video.pause()
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
