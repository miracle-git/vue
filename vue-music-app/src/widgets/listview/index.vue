<template>
  <scroll class="listview"
          ref="listview"
          :data="data"
          :listened="true"
          :probeType="3"
          @scroll="onListViewScroll">
    <ul>
      <li v-for="(group, index) in data"
          ref="listGroup"
          class="list-group"
          :key="index">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="(item, index) in group.items"
              class="list-group-item"
              @click="onSelectItem(item)"
              :key="index">
            <img v-lazy="item.avatar" class="avatar"/>
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut"
         @touchstart.stop.prevent="onSCTouchStart"
         @touchmove.stop.prevent="onSCTouchMove"
         @touchend.stop>
      <ul>
        <li v-for="(item, index) in shortcuts"
            class="item"
            :class="{'current': currentIndex === index }"
            :key="index"
            :data-index="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" v-show="fixTitle" ref="fix">
      <div class="fixed-title">{{fixTitle}}</div>
    </div>
    <div class="loading-container" v-show="!data.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '@widgets/scroll'
  import Loading from '@widgets/loading'
  import { dataAttr, autoPrefix } from '@common/dom'

  export default {
    created() {
      this.touch = {}
      this.anchor_height = 18
      this.title_height = 30
      this.listHeights = []
      this.transform = autoPrefix('transform')
    },
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
    props: {
      data: {
        type: Array,
        default: null
      }
    },
    computed: {
      shortcuts() {
        return this.data.map(group => group.title.substr(0, 1))
      },
      fixTitle() {
        if (this.scrollY > 0) return ''
        const item = this.data[this.currentIndex]
        return item ? item.title : ''
      }
    },
    methods: {
      onSelectItem(item) {
        this.$emit('select', item)
      },
      onSCTouchStart(e) {
        const anchorIndex = dataAttr(e.target, 'index')
        this.touch.y1 = e.touches[0].pageY
        this.touch.anchorIndex = anchorIndex
        this._scrollToAnchor(anchorIndex)
      },
      onSCTouchMove(e) {
        this.touch.y2 = e.touches[0].pageY
        const delta = (this.touch.y2 - this.touch.y1) / this.anchor_height | 0
        const anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollToAnchor(anchorIndex)
      },
      onListViewScroll(pos) {
        this.scrollY = pos.y
      },
      _scrollToAnchor(index) {
        const listHeights = this.listHeights
        if (!index && index !== 0) return
        if (index < 0) {
          index = 0
        } else if (index > listHeights.length - 2) {
          index = listHeights.length - 2
        }
        this.scrollY = -listHeights[index]
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      },
      _calculateHeight() {
        this.listHeights = []
        const groups = this.$refs.listGroup
        let height = 0
        this.listHeights.push(height)
        for (let i = 0; i < groups.length; i++) {
          height += groups[i].clientHeight
          this.listHeights.push(height)
        }
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
        const listHeights = this.listHeights
        // 当滑动到顶部，newY > 0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        // 当滑动到中间部位时
        for (let i = 0; i < listHeights.length - 1; i++) {
          const height1 = listHeights[i]
          const height2 = listHeights[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // 当滑动到底部时，且newY大于最后一个元素的上限
        this.currentIndex = listHeights.length - 2
      },
      diff(newVal) {
        const fixedTop = newVal > 0 && newVal < this.title_height ? newVal - this.title_height : 0
        if (this.fixedTop === fixedTop) return
        this.fixedTop = fixedTop
        this.$refs.fix.style[this.transform] = `translate3d(0,${this.fixedTop}px,0)`
      }
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@assets/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        margin-top: -1px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
