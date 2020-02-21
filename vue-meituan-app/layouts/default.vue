<template>
  <el-container class="layout-default">
    <el-header>
      <mt-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      <mt-footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import MtHeader from '@/components/public/header'
  import MtFooter from '@/components/public/footer'

  export default {
    components: {
      MtHeader,
      MtFooter
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/layout/default.scss"
</style>
