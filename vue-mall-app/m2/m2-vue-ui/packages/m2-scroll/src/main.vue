<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'm2-scroll',
    data() {
      return {
        $scroll: null
      }
    },
    mounted() {
      this.initScroll()
    },
    methods: {
      initScroll() {
        const isScroll = this.isListened('scroll')
        const isPullingUp = this.isListened('pullingUp')
        // 1、创建BetterScroll对象
        this.$scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: isScroll ? 3 : 0,
          pullUpLoad: isPullingUp
        })
        // 2. 注册滚动监听事件(首先判断是否传入scroll事件)
        isScroll && this.$scroll.on('scroll', position => this.$emit('scroll', position))
        // 3. 注册上拉加载事件(首先判断是否传入pullingUp事件)
        isPullingUp && this.$scroll.on('pullingUp', () => this.$emit('pullingUp'))
      },
      isListened(eventName) {
        return this._events[eventName] && typeof this._events[eventName] === 'object'
      },
      scrollTop(duration = 500) {
        this.scrollTo(0, 0, duration)
      },
      scrollTo(x, y, duration = 500) {
        this.$scroll && this.$scroll.scrollTo(x, y, duration)
      },
      finishPullup() {
        this.$scroll && this.$scroll.finishPullup()
      },
      refresh() {
        console.log('xxxxxx')
        this.$scroll && this.$scroll.refresh()
      }
    }
  }
</script>
