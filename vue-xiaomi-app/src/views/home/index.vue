<template>
  <div class="home-page">
   <div class="container">
     <swiper-box/>
     <adv-box/>
     <xm-bottom-bar/>
   </div>
  </div>
</template>

<script>
  import { XmBottomBar } from 'components'
  import { SwiperBox, AdvBox } from './children'

  export default {
    components: {
      XmBottomBar,
      SwiperBox,
      AdvBox
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
