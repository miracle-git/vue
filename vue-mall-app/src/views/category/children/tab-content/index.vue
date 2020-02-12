<template>
  <m2-scroll class="tab-content">
    <div class="cate-data">
      <tab-sub-category :items="data.list"/>
      <tab-control :items="categoryTabs" :current="currentType" @tabItemClick="tabItemClick"/>
      <tab-category-detail :items="detail[currentType]"/>
    </div>
  </m2-scroll>
</template>

<script>
  import { TabControlMixin } from 'mixins'
  import { TabControl } from 'components'
  import TabSubCategory from '../tab-sub-category'
  import TabCategoryDetail from '../tab-category-detail'

  export default {
    name: 'tab-content',
    mixins: [TabControlMixin],
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      detail: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data: () => ({
      categoryTabs: [
        { type: 'pop', text: '综合' },
        { type: 'new', text: '新品' },
        { type: 'sell', text: '销量' }
      ]
    }),
    components: {
      TabControl,
      TabSubCategory,
      TabCategoryDetail
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
