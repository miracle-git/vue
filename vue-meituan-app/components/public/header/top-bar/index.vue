<template>
  <el-row :gutter="0" class="mt-top-bar">
    <el-col :span="5">
      <mt-geo/>
    </el-col>
    <el-col :span="5">
      <mt-user/>
    </el-col>
    <el-col :span="14">
      <mt-nav/>
    </el-col>
  </el-row>
</template>

<script>
  import MtGeo from './geo'
  import MtUser from './user'
  import MtNav from './nav'

  export default {
    components: {
      MtGeo,
      MtUser,
      MtNav
    }
  }
</script>