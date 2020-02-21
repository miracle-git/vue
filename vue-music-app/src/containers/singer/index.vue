<template>
  <div class="vm-singer">
    <list-view :data="singers" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { getPinYin } from '@common/utils'
  import { getSingerList } from '@api/singer.api'
  import { SET_SINGER } from '@store/mutation-types'
  import Singer from '@models/singer.model'
  import ListView from '@widgets/listview'

  export default {
    created() {
      this.hot_singer_len = 10
      this.hot_name = '热门'
      this._getData()
    },
    data() {
      return {
        singers: []
      }
    },
    methods: {
      ...mapMutations({
        setSinger: SET_SINGER
      }),
      selectSinger(singer) {
        this.$router.push(`/singer/${singer.id}`)
        this.setSinger(singer)
      },
      _getData() {
        getSingerList(data => {
          this.singers = this._normalize(data.singerList.data.singerlist)
        })
      },
      _normalize(singers) {
        const map = {
          hot: {
            title: this.hot_name,
            items: []
          }
        }

        singers.forEach((item, index) => {
          if (index < this.hot_singer_len) {
            this._addSinger(map.hot.items, item)
          }
          const key = getPinYin({text: item.singer_name})
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }

          this._addSinger(map[key].items, item)
        })

        return this._sortSinger(map)
      },
      _addSinger(items, singer) {
        items.push(new Singer({
          id: singer.singer_id,
          name: singer.singer_name,
          mid: singer.singer_mid
        }))
      },
      _sortSinger(map) {
        const hotItems = []
        const singerItems = []

        for (let key in map) {
          const val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            singerItems.push(val)
          } else if (val.title === this.hot_name) {
            hotItems.push(val)
          }
        }
        singerItems.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))

        return hotItems.concat(singerItems)
      }
    },
    components: {
      ListView
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@assets/stylus/variable"

  .vm-singer
    position: fixed
    top: 88px
    width: 100%
    bottom: 0
</style>
