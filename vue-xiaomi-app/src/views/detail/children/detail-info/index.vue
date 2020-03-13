<template>
  <div class="detail-info">
    <div class="container">
      <div class="detail-swiper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <img :src="item.url" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="detail-content">
        <div class="item-info">
          <h2 class="item-title">{{data.name}}</h2>
          <p class="item-desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="item-vendor">小米自营</div>
          <div class="item-price">{{data.price | currency}}<span class="old-price">{{1999 | currency}}</span></div>
        </div>
        <div class="item-delivery item-area">
          <i class="loc"></i>
          <p class="addr">北京 北京市 朝阳区 安定门街道</p>
          <p class="stock">有现货</p>
        </div>
        <div class="item-version item-select clear-fix">
          <h2 class="title">选择版本</h2>
          <div v-for="(item, index) in version.data"
               :key="index" :class="[`${item.align}`, item.type === version.value ? 'checked' : '']"
               @click="version.value=item.type">
            {{item.text}}
          </div>
        </div>
        <div class="item-color item-select clear-fix">
          <h2 class="title">选择颜色</h2>
          <div v-for="(item, index) in color.data"
               :key="index" :class="[`${item.align}`, item.type === color.value ? 'checked' : '']"
               @click="color.value=item.type">
            <span :class="item.type"></span>{{item.text}}
          </div>
        </div>
        <div class="item-total item-area clear-fix">
          <div class="total-info">
            <div class="left">{{data.name}}</div>
            <div class="right" v-show="selectedItems">{{selectedItems}}</div>
          </div>
          <div class="total-price">
            总计：<span>{{data.price | currency}}</span>
          </div>
        </div>
        <div class="item-btn">
          <a href="javascript:void(0);" class="btn btn-xl btn-primary" @click="handleAddCart(data.id)">加入购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { DETAIL_SLIDE_ITEMS, XM_APP_KEYS } from 'config/app.conf'

  export default {
    name: 'detail-info',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data: () => ({
      slideList: DETAIL_SLIDE_ITEMS,
      swiperOptions: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      version: {
        value: '1',
        data: [
          { type: '1', text: '6GB+64GB 全网通', align: 'left' },
          { type: '2', text: '4GB+64GB 移动4G', align: 'right' }
        ]
      },
      color: {
        value: 'red',
        data: [
          { type: 'gray', text: '深空灰', align: 'left' },
          { type: 'red', text: '中国红', align: 'right' }
        ]
      }
    }),
    computed: {
      selectedItems() {
        return `${this.getSelectedItem('version')} ${this.getSelectedItem('color')}`
      }
    },
    methods: {
      ...mapActions(['saveCartNum']),
      getSelectedItem(type) {
        const item = this[type].data.find(item => item.type === this[type].value)
        return item ? item.text : ''
      },
      handleAddCart(id) {
        this.$bus.$emit(XM_APP_KEYS.addToCart, id)
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
  @import "~swiper/dist/css/swiper.min.css";
</style>
