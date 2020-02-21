<template>
  <div class="vm-recommend">
    <scroll ref="scroll" class="recommend-wrapper" :data="discs">
      <div class="recommend-container">
        <div v-if="sliders.length" class="slider-wrapper">
          <slider>
            <div v-for="item in sliders" :key="item.id">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage()" :src="item.picUrl"/>
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li v-for="(item, key) in discs" class="item" :key="key">
                <div class="icon">
                  <img width="50" height="50" v-lazy="item.imgurl"/>
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discs.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
  import { getSliderData, getDiscList } from '@api/recommend.api'
  import Slider from '@widgets/slider'
  import Scroll from '@widgets/scroll'
  import Loading from '@widgets/loading'

  export default {
    data() {
      return {
        sliders: [],
        discs: []
      }
    },
    created() {
      this._getData()
    },
    methods: {
      _getData() {
        getSliderData(data => { this.sliders = data.slider })
        getDiscList(data => { this.discs = data.list })
      },
      loadImage() {
        if (!this.imageLoaded) {
          this.$refs.scroll.refresh()
          this.imageLoaded = true
        }
      }
    },
    components: {
      Slider,
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@assets/stylus/variable"

  .vm-recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-wrapper
      overflow: hidden
      height: 100%
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>
