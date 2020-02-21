<template>
  <div class="vm-music-list">
    <div class="back" @click="back()">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgStyle" ref="image">
      <div class="play-wrapper">
        <div class="play-btn" v-show="!!songs.length" ref="player">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <scroll class="list" :data="songs" :listened="true"
            :probeType="3" @scroll="scroll" ref="list">
      <div class="song-list-wrapper">
        <vm-song-list :songs="songs"></vm-song-list>
      </div>
      <div class="loading-container" v-show="!songs.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
  import { autoPrefix } from '@common/dom'
  import Scroll from '@widgets/scroll'
  import Loading from '@widgets/loading'
  import VmSongList from '@components/vm-song-list'

  export default {
    data() {
      return {
        scrollY: 0
      }
    },
    created() {
      this.reservedHeight = 40
      this.transform = autoPrefix('transform')
      this.backdrop = autoPrefix('backdrop-filter')
    },
    mounted() {
      const { image, list } = this.$refs
      this.imageHeight = image.clientHeight
      this.minTranlateY = -this.imageHeight + this.reservedHeight
      list.$el.style.top = `${this.imageHeight}px`
    },
    computed: {
      bgStyle() {
        return `background-image:url(${this.bgImage})`
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      scroll(pos) {
        this.scrollY = pos.y
      }
    },
    props: {
      songs: {
        type: Array,
        default: null
      },
      title: {
        type: String,
        default: ''
      },
      bgImage: {
        type: String,
        default: ''
      }
    },
    watch: {
      scrollY(newY) {
        const { layer, image, player, filter } = this.$refs
        const translateY = Math.max(this.minTranlateY, newY)
        let [zIndex, scale, blur] = [0, 1, 0]

        layer.style[this.transform] = `translate3d(0, ${translateY}px, 0)`

        const percent = Math.abs(newY / this.imageHeight)
        if (newY > 0) {
          scale = 1 + percent
          zIndex = 10
        } else {
          blur = Math.min(20 * percent, 20)
        }
        filter.style[this.backdrop] = `blur(${blur}px)`

        if (newY < this.minTranlateY) {
          zIndex = 10
          image.style.paddingTop = 0
          image.style.height = `${this.reservedHeight}px`
          player.style.display = 'none'
        } else {
          image.style.paddingTop = '70%'
          image.style.height = 0
          player.style.display = ''
        }
        image.style.zIndex = zIndex
        image.style[this.transform] = `scale(${scale})`
      }
    },
    components: {
      Scroll,
      Loading,
      VmSongList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@assets/stylus/variable"
  @import "~@assets/stylus/mixin"

  .vm-music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      no-wrap()
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-text
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play-btn
          box-sizing: border-box
          width: 135px
          padding: 7px 0
          margin: 0 auto
          text-align: center
          border: 1px solid $color-theme
          color: $color-theme
          border-radius: 100px
          font-size: 0
          .icon-play
            display: inline-block
            vertical-align: middle
            margin-right: 6px
            font-size: $font-size-medium-x
          .text
            display: inline-block
            vertical-align: middle
            font-size: $font-size-small
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
    .bg-layer
      position: relative
      height: 100%
      background: $color-background
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      /*overflow: hidden*/
      background: $color-background
      .song-list-wrapper
        padding: 20px 30px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
