<template>
  <div class="mt-header">
    <el-row>
      <el-col>
        <mt-top-bar/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <mt-search-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MtTopBar from './top-bar'
  import MtSearchBar from './search-bar'

  export default {
    components: {
      MtTopBar,
      MtSearchBar
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss"
</style>