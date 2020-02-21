<template>
  <transition name="slide">
    <vm-music-list :songs="songs"
                   :title="singer.name"
                   :bg-image="singer.avatar">
    </vm-music-list>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getSingerDetail } from '@api/singer.api'
  import { createSong } from '@models/song.model'
  import VmMusicList from '@components/vm-music-list'

  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getData()
    },
    methods: {
      _getData() {
        const id = this.singer.id
        if (!id) this.$router.push('/singer')
        getSingerDetail(data => { this.songs = this._normalize(data.list) }, id)
      },
      _normalize(list) {
        const result = []
        list.forEach(item => {
          const { musicData } = item
          if (musicData.songid &&
              musicData.songmid &&
              musicData.albummid) {
            result.push(createSong(musicData))
          }
        })
        return result
      }
    },
    components: {
      VmMusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@assets/stylus/variable"

  .slide-enter-active
  .slide-leave-active
    transition: all 0.3s
  .slide-enter
  .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
