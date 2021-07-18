<template>
  <div class="recommend-page" v-loading="loading">
    <vm-scroll>
      <div class="recommend-content">
        <!--轮播图-->
        <div class="slider-wrapper">
          <div class="slider-content">
            <vm-slider v-if="sliders.length" :sliders="sliders"/>
          </div>
        </div>
        <!--歌单列表-->
        <div class="album-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul v-if="albums.length">
            <li v-for="item in albums" :key="item.id" class="album-item">
              <div class="album-icon">
                <img v-lazy="item.pic" width="60" height="60"/>
              </div>
              <div class="album-text">
                <h2 class="album-name">{{item.username}}</h2>
                <p class="album-title">{{item.title}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </vm-scroll>
  </div>
</template>

<script>
  import { defineComponent, ref, computed, onBeforeMount } from 'vue'
  import { getRecommend } from '@/services/recommend'
  import { Scroll, Slider } from '@/components'

  export default defineComponent({
    components: {
      VmScroll: Scroll,
      VmSlider: Slider
    },
    setup() {
      const sliders = ref([])
      const albums = ref([])
      // 计算属性
      const loading = computed(() => !sliders.value.length && !albums.value.length)
      // 加载数据
      onBeforeMount(async () => {
        const result = await getRecommend()
        sliders.value = result.sliders
        albums.value = result.albums
      })
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
