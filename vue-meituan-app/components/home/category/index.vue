<template>
  <div class="mt-category">
    <dl class="cate-items" @mouseleave="hideDetailPanel">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in categoryData" 
          :key="index" 
          :class="{'hover':currentCategory===item.type}" 
          @mouseover="showDetailPanel">
        <i :class="item.type"/>{{item.name}}<span class="arrow"/>
      </dd>
    </dl>
    <div class="cate-details" 
         v-if="currentCategory" 
         @mouseover="clearTimer" 
         @mouseleave="currentCategory=''">
      <template v-for="(item, index) in detailData.children">
        <span :key="index">
          <h2 class="title">{{item.title}}</h2>
          <a href="#" class="more" target="_blank">更多<span class="arrow"/></a>
          <span v-for="(child, idx) in item.children" :key="idx" class="item">
            {{child}}
          </span>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentCategory: '',
        categoryData: [{
          type: 'food',
          name: '美食',
          children: [{
            title: '美食1',
            children: ['小吃', '饮品', '快餐', '自助餐', '小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐']
          }, {
            title: '美食2',
            children: ['小吃', '饮品', '快餐', '自助餐', '小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐']
          }, {
            title: '美食3',
            children: ['小吃', '饮品', '快餐', '自助餐', '小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐']
          }, {
            title: '美食4',
            children: ['小吃', '饮品', '快餐', '自助餐', '小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐','小吃', '饮品', '快餐', '自助餐']
          }]
        }, {
          type: 'takeout',
          name: '外卖',
          children: [{
            title: '外卖',
            children: ['美团外卖', '饿了么外卖', '百度外卖', '口碑外卖']
          }]
        }, {
          type: 'hotel',
          name: '酒店',
          children: [{
            title: '星级',
            children: ['经济型', '舒适性/三星', '高档型/四星', '豪华型/五星']
          }]
        }]
      }
    },
    computed: {
      detailData() {
        return this.categoryData.filter(item => item.type === this.currentCategory)[0];
      }
    },
    methods: {
      showDetailPanel(e) {
        const target = e.target.querySelector('i') || e.target.parentElement.querySelector('i');
        this.currentCategory = target.className;
      },
      hideDetailPanel() {
        this._timer = setTimeout(() => {
          this.currentCategory = ''
        }, 200);
      },
      clearTimer() {
        clearTimeout(this._timer);
      }
    }
  }
</script>