<template>
  <div class="singer-page" v-loading="!singers.length">
    <vm-singer-list v-show="singers.length" :data="singers" @select="selectSinger"/>
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :singer="currentSinger"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
  import { defineComponent, ref, onBeforeMount } from 'vue'
  import storage from 'good-storage'
  import router from '@/router'
  import { CACHE_KEY } from '@/config/key.config'
  import { getSingerList } from '@/services/singer.service'
  import { SingerList } from './children'

  export default defineComponent({
    components: {
      VmSingerList: SingerList
    },
    setup() {
      // 定义数据
      const singers = ref([])
      const currentSinger = ref(null)
      // 定义方法
      async function getData() {
        const result = await getSingerList()
        singers.value = result.singers
      }
      function selectSinger(singer) {
        currentSinger.value = singer
        // 缓存歌手
        storage.session.set(CACHE_KEY.singer, singer)
        // 跳转到详情页
        router.push({ path: `/singer/${singer.mid}` })
      }
      // 加载数据
      onBeforeMount(getData)
      // 返回数据
      return {
        singers,
        currentSinger,
        selectSinger
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
