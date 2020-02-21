<template>
  <el-row class="mt-search-bar">
    <el-col :span="5" class="left">
      <a href="//bj.meituan.com" class="logo"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></a>
    </el-col>
    <el-col :span="14" class="center">
      <mt-search/>
    </el-col>
    <el-col :span="5" class="right">
      <ul class="sale-service">
        <li><i class="refund"/><span class="text">随时退</span></li>
        <li><i class="free"/><span class="text">不满意免单</span></li>
        <li><i class="overdue"/><span class="text">过期退</span></li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
  import MtSearch from './search'

  export default {
    components: {
      MtSearch
    }
  }
</script>