<template>
  <div class="mt-banner-slider">
    <el-carousel>
      <el-carousel-item v-for="(item, index) in sliderData" :key="index">
        <a :href="item.url" target="_blank">
          <img :src="item.img" alt=""/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliderData: [{
          url: 'http://hotel.meituan.com/',
          img: '//p1.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
        }, {
          url: '/meishi/',
          img: '//p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
        }, {
          url: 'http://waimai.meituan.com/',
          img: '//p1.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
        }, {
          url: 'http://maoyan.com/',
          img: '//p1.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
        }, {
          url: 'https://pc.meituan.com/?activity_code=19_00038033',
          img: '//p1.meituan.net/codeman/e419ae8488f776407459b0ee7eada070286451.jpg'
        }]
      }
    }
  }
</script>