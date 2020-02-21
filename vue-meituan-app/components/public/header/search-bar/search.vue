<template>
  <div class="mt-search">
    <div class="search-wrapper">
      <el-input v-model="keyword" @focus="showSearchPanel" @blur="hideSearchPanel" placeholder="搜索商家或地点"/>
      <button class="el-button el-button--primary"><i class="el-icon-search"></i></button>
      <div class="hot-list" v-if="isHot">
        <dl>
          <dt>热门搜索</dt>
          <dd v-for="(item, index) in hotData" :key="index">{{item}}</dd>
        </dl>
      </div>
      <div class="search-list" v-if="isSearch">
        <dl>
          <dd v-for="(item, index) in searchData" :key="index">{{item}}</dd>
        </dl>
      </div>
    </div>
    <div class="recommend-list">
      <a href="#" v-for="(item, index) in hotData" :key="index">{{item}}</a>
    </div>
    <div class="nav-item-list">
      <ul>
        <li><nuxt-link to="/takeout" class="takeout">美团外卖</nuxt-link></li>
        <li><nuxt-link to="/movie" class="movie">猫眼电影</nuxt-link></li>
        <li><nuxt-link to="/hotel" class="hotel">美团酒店</nuxt-link></li>
        <li><nuxt-link to="/apartment" class="apartment">民宿/公寓</nuxt-link></li>
        <li><nuxt-link to="/merchant" class="merchant">商家入驻</nuxt-link></li>
        <li><nuxt-link to="/charity" class="charity">美团公益</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
        hasFocus: false,
        hotData: ['故宫博物院', '北京欢乐谷', '故宫珍宝馆', '尚隐·泉都市生活馆', '八达岭长城', '北京野生动物园'],
        searchData: ['火锅', '牛肉火锅', '羊肉火锅', '清汤火锅']
      }
    },
    computed: {
      isHot() {
        return this.hasFocus && !this.keyword
      },
      isSearch() {
        return this.hasFocus && this.keyword
      }
    },
    methods: {
      showSearchPanel() {
        this.hasFocus = true
      },
      hideSearchPanel() {
        setTimeout(() => {
          this.hasFocus = false
        }, 200)
      }
    }
  }
</script>