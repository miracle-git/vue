<template>
  <div class="vm-music-list">
    <div class="back-btn" @click="$router.back">
      <i class="icon-back"></i>
    </div>
    <div class="music-title">{{title}}</div>
    <div class="music-pic" :style="musicPicStyle" ref="musicPicRef">
      <div class="filter" :style="filterStyle"></div>
    </div>
    <vm-scroll class="song-list" :style="scrollStyle" ref="scrollRef"
               :probe-type="3" @scroll="onScroll"
               v-loading="loading" v-no-result:[noResultText]="noResult">
      <div class="song-list-wrapper">
        <vm-song-list :data="data"/>
      </div>
    </vm-scroll>
  </div>
</template>

<script>
  import { defineComponent, ref, computed, onMounted } from 'vue'
  import { Scroll, SongList } from '@/components'
  import { SINGER_CONFIG } from '@/config/view.config'

  export default defineComponent({
    name: 'vm-music-list',
    components: {
      VmScroll: Scroll,
      VmSongList: SongList
    },
    props: {
      data: {
        type: Array,
        default: () => []
      },
      title: String,
      pic: String,
      loading: Boolean,
      noResultText: {
        type: String,
        default: '抱歉，没有找到可播放的歌曲'
      }
    },
    setup(props) {
      // 定义数据
      const musicPicHeight = ref(0)
      const musicPicRef = ref(null)
      const scrollRef = ref(null)
      const scrollY = ref(0)
      const maxTranslateY = ref(0)
      // 计算属性
      const noResult = computed(() => !props.loading && !props.data.length)
      const musicPicStyle = computed(() => {
        let zIndex = 0
        let paddingTop = '70%'
        let height = 0
        let translateZ = 0
        let scale = 1
        // 临时存储响应式变量
        const r = {
          scrollY: scrollY.value,
          maxTranslateY: maxTranslateY.value,
          musicPicHeight: musicPicHeight.value
        }
        // 当滚动到顶部时，需要固定头部高度
        if (r.scrollY > r.maxTranslateY) {
          zIndex = 10
          paddingTop = 0
          height = `${SINGER_CONFIG.musicTitleHeight}px`
          translateZ = 1
        }
        // 处理向下拉图片放大效果
        if (r.scrollY < 0) {
          scale = 1 + Math.abs(r.scrollY / r.musicPicHeight)
        }
        // 返回动态样式
        return {
          zIndex,
          paddingTop,
          height,
          backgroundImage: `url(${props.pic})`,
          // 解决ios移动端兼容性问题
          transform: `scale(${scale})translateZ(${translateZ}px)`
        }
      })
      const filterStyle = computed(() => {
        let blur = 0
        // 临时存储响应式变量
        const r = {
          scrollY: scrollY.value,
          maxTranslateY: maxTranslateY.value,
          musicPicHeight: musicPicHeight.value
        }
        // 向上拉设置图片模糊效果
        if (r.scrollY >= 0) {
          blur = Math.min(r.maxTranslateY / r.musicPicHeight, r.scrollY / r.musicPicHeight) * 10
        }
        return {
          backdropFilter: `blur(${blur}px)`
        }
      })
      const scrollStyle = computed(() => {
        return {
          top: `${musicPicHeight.value}px`
        }
      })
      // 加载数据
      onMounted(() => {
        musicPicHeight.value = musicPicRef.value.clientHeight
        maxTranslateY.value = musicPicHeight.value - SINGER_CONFIG.musicTitleHeight
      })
      // 定义方法
      function onScroll(pos) {
        scrollY.value = -pos.y
      }
      // 返回数据
      return {
        noResult,
        filterStyle,
        musicPicStyle,
        musicPicRef,
        scrollRef,
        scrollStyle,
        onScroll
      }
    }
  })
</script>

<style lang="scss">
  @import "index";
</style>
