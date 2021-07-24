<template>
  <div class="recommend-page" v-loading="loading">
    <vm-scroll class="scroll-content">
      <div class="wrapper">
        <!--轮播图-->
        <div class="slider-wrapper">
          <div class="slider-content">
            <vm-slider v-if="sliders.length" :data="sliders"/>
          </div>
        </div>
        <!--歌单列表-->
        <div class="album-wrapper">
          <h1 class="album-header" v-show="!loading">热门歌单推荐</h1>
          <vm-album-list v-if="albums.length" :data="albums"/>
        </div>
      </div>
    </vm-scroll>
  </div>
</template>

<script>
  import { defineComponent, ref, computed, onBeforeMount } from 'vue'
  import { getRecommendList } from '@/services/recommend.service'
  import { Scroll, Slider } from '@/components'
  import { AlbumList } from './children'

  export default defineComponent({
    components: {
      VmScroll: Scroll,
      VmSlider: Slider,
      VmAlbumList: AlbumList
    },
    setup() {
      // 定义数据
      const sliders = ref([])
      const albums = ref([])
      // 计算属性
      const loading = computed(() => !sliders.value.length && !albums.value.length)
      // 定义方法
      async function getData() {
        const result = await getRecommendList()
        sliders.value = result.sliders
        albums.value = result.albums
      }
      // 加载数据
      onBeforeMount(getData)
      // 返回数据
      return {
        sliders,
        albums,
        loading
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
