<template>
  <div class="category-page">
    <nav-bar/>
    <div class="content">
      <tab-menu :items="categories" @tabItemClick="getSubCategories"/>
      <tab-content :data="categoryList" :detail="categoryDetail"/>
    </div>
  </div>
</template>

<script>
  import { NavBar, TabMenu, TabContent } from './children'
  import { getAllCategories, getSubCategories, getCategoryDetail } from 'services/category.service'

  export default {
    data: () => ({
      categories: [],
      categoryData: {},
      currentIndex: -1
    }),
    computed: {
      categoryList() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subCategories
      },
      categoryDetail() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].categoryDetail
      }
    },
    created() {
      this.getAllCategories()
    },
    methods: {
      getAllCategories() {
        getAllCategories().then(res => {
          // 1.获取分类数据
          this.categories = res.category.list
          // 2.初始化每个类别的子数据
          this.categories.forEach((item, index) => {
            this.categoryData[index] = {
              subCategories: {},
              categoryDetail: {
                pop: [],
                new: [],
                sell: []
              }
            }
          })
          // 3.请求第一个分类的数据
          this.getSubCategories(0)
        })
      },
      getSubCategories(index) {
        this.currentIndex = index
        const { maitKey } = this.categories[index]
        getSubCategories(maitKey).then(res => {
          this.categoryData[index].subCategories = res
          this.categoryData = { ...this.categoryData }
          this.getCategoryDetail(this.categoryData[index].categoryDetail)
        })
      },
      getCategoryDetail(category) {
        Object.keys(category).forEach(item => this.getCategoryDetailByType(item))
      },
      getCategoryDetailByType(type) {
        // 1.获取请求的miniWallkey
        const { miniWallkey } = this.categories[this.currentIndex]
        // 2.发送请求,传入type和miniWallkey
        getCategoryDetail(type, miniWallkey).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = { ...this.categoryData }
        })
      }
    },
    components: {
      NavBar,
      TabMenu,
      TabContent
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
