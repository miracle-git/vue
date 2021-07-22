<template>
  <div class="singer-page" v-loading="!singers.length">
    <vm-singer-list v-show="singers.length" :data="singers"/>
  </div>
</template>

<script>
  import { defineComponent, ref, onBeforeMount } from 'vue'
  import { getSingerList } from '@/services/singer'
  import { SingerList } from './children'

  export default defineComponent({
    components: {
      VmSingerList: SingerList
    },
    setup() {
      // 定义数据
      const singers = ref([])
      // 定义方法
      async function getData() {
        const result = await getSingerList()
        singers.value = result.singers
      }
      // 加载数据
      onBeforeMount(getData)
      // 返回数据
      return {
        singers
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
