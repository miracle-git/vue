<template>
  <div class="m2-swiper">
    <div class="swiper"
         @touchstart="sliderStart"
         @touchend="sliderEnd"
         @touchmove="sliderMove">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && sliderCount > 1">
        <div class="indicator-item"
             v-for="(_, index) in sliderCount"
             :key="index"
             :class="{'active':index === currentIndex - 1}">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'm2-swiper',
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      duration: {
        type: Number,
        default: 300
      },
      ratio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        sliderCount: 0, // 元素个数
        isScrolling: false, // 是否正在滚动
        swiperWidth: 0, // swiper的宽度
        swiperStyle: {}, // swiper的样式
        currentIndex: 1 // 当前显示slider的index
      }
    },
    mounted() {
      setTimeout(() => {
        this.addSliders()
        this.startTimer()
      }, 100)
    },
    methods: {
      sliderStart(e) {
        // 1.如果正在滚动, 不可以拖动
        if (this.isScrolling) return
        // 2.停止定时器
        this.stopTimer()
        // 3.保存开始滚动的位置
        this.startX = e.touches[0].pageX
      },
      sliderEnd() {
        // 1.判断最终的距离
        if (this.distance !== 0) {
          // 2.获取移动的距离
          const move = Math.abs(this.distance)
          // 3.移动比例超过ratio
          if (move > this.swiperWidth * this.ratio) {
            // 4.向右移动或向左移动
            this.distance > 0 ? this.currentIndex-- : this.currentIndex++
          }
          // 5.移动到正确的位置
          this.scrollContent(-this.currentIndex * this.swiperWidth)
          // 6.移动完成后重新开启定时器
          this.startTimer()
        }
      },
      sliderMove(e) {
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX
        this.distance = this.currentX - this.startX
        const position = -this.currentIndex * this.swiperWidth
        const moveDistance = this.distance + position
        // 2.设置当前的位置
        this.setTransform(moveDistance)
      },
      // 控制上一个
      previous() {
        this.changeItem(-1)
      },
      // 控制下一个
      next() {
        this.changeItem(1)
      },
      changeItem(number) {
        // 1.移除定时器
        this.stopTimer()
        // 2.修改index和位置
        this.currentIndex += number
        this.scrollContent(-this.currentIndex * this.swiperWidth)
        // 3.添加定时器
        this.startTimer()
      },
      // 在swiper前后添加sliders
      addSliders() {
        // 1.获取要操作的元素-->
        const $swiper = document.querySelector('.swiper')
        const $sliders = $swiper.getElementsByClassName('m2-swiper-item')
        // 2.保存个数-->
        this.sliderCount = $sliders.length
        // 3.如果大于1个, 那么在前后分别添加一个slider
        if (this.sliderCount > 1) {
          const $first = $sliders[0].cloneNode(true)
          const $last = $sliders[this.sliderCount - 1].cloneNode(true)
          $swiper.insertBefore($last, $sliders[0])
          $swiper.appendChild($first)
          this.swiperWidth = $swiper.offsetWidth
          this.swiperStyle = $swiper.style
        }
        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.swiperWidth)
      },
      // 设置滚动的位置
      setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`
      },
      // 开启定时器
      startTimer() {
        this.$timer = setInterval(() => {
          this.currentIndex++
          this.scrollContent(-this.currentIndex * this.swiperWidth)
        }, this.interval)
      },
      // 停止定时器
      stopTimer() {
        this.$timer && clearInterval(this.$timer)
      },
      // 滚动到正确的位置
      scrollContent(position) {
        // 1.设置正在滚动
        this.isScrolling = true
        // 2.开始滚动动画
        this.swiperStyle.transition = `transform ${this.duration}ms`
        this.setTransform(position)
        // 3.判断滚动到的位置
        this.checkPosition()
        // 4.滚动完成
        this.isScrolling = false
      },
      // 校验正确的位置
      checkPosition() {
        setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms'
          if (this.currentIndex >= this.sliderCount + 1) {
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.swiperWidth)
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.sliderCount
            this.setTransform(-this.currentIndex * this.swiperWidth)
          }
          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex - 1)
        }, this.duration)
      }
    }
  }
</script>
