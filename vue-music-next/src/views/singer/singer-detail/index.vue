<template>
  <div class="singer-detail-page">
    <vm-music-list :data="songs" :title="title" :pic="pic" :loading="loading"/>
  </div>
</template>

<script>
  import { defineComponent, ref, computed, onBeforeMount } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import storage from 'good-storage'
  import { CACHE_KEY } from '@/config/key.config'
  import { getSingerDetail } from '@/services/singer.service'
  import { getSongsUrl } from '@/services/song.service'
  import { MusicList } from '@/views/singer/children'

  export default defineComponent({
    name: 'vm-singer-detail',
    components: {
      VmMusicList: MusicList
    },
    props: {
      singer: {
        type: Object,
        default: () => {},
        required: true
      }
    },
    setup(props) {
      // 定义数据
      const songs = ref([])
      const loading = ref(true)
      const route = useRoute()
      // 计算属性
      const currentSinger = computed(() => {
        let res = null
        if (props.singer) {
          res = props.singer
        } else {
          const cacheSinger = storage.session.get(CACHE_KEY.singer)
          if (cacheSinger && cacheSinger.mid === route.params.id) {
            res = cacheSinger
          }
        }
        return res
      })
      const title = computed(() => {
        const singer = currentSinger.value
        return singer ? singer.name : ''
      })
      const pic = computed(() => {
        const singer = currentSinger.value
        return singer ? singer.pic : ''
      })
      // 定义方法
      async function getData() {
        const singer = currentSinger.value
        if (!singer) {
          const route = useRoute()
          const router = useRouter()
          const { path } = route.matched[0]
          router.push({ path })
          return
        }
        const result = await getSingerDetail(singer)
        songs.value = await getSongsUrl(result.songs)
        loading.value = false
      }
      // 加载数据
      onBeforeMount(getData)
      // 返回数据
      return {
        songs,
        title,
        pic,
        loading
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
