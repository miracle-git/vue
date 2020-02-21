<template>
   <div class="mt-home">
     <el-row>
       <el-col :span="5">
         <mt-category/>
       </el-col>
       <el-col :span="19">
         <mt-banner/>
       </el-col>
     </el-row>
     <el-row>
       <el-col>3</el-col>
     </el-row>
   </div>
</template>

<script>
import MtCategory from '@/components/home/category'
import MtBanner from '@/components/home/banner'

export default {
  components: {
    MtCategory,
    MtBanner
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/home/index.scss"
</style>