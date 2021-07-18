<template>
  <div>Recommend</div>
</template>

<script>
  import { getRecommend } from '@/services/recommend'

  export default {
    data() {
      return {
        sliders: [],
        albums: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        const { sliders, albums } = await getRecommend()
        this.sliders = sliders
        this.albums = albums
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
