<template>
  <div class="home-page">
   <div class="container">
     <swiper-box/>
     <xm-bottom-bar/>
   </div>
  </div>
</template>

<script>
  import { XmBottomBar } from 'components'
  import { SwiperBox } from './children'

  export default {
    components: {
      SwiperBox,
      XmBottomBar
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
