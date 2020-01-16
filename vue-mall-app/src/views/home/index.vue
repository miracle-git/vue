<template>
  <div class="home-page">
    <m2-nav-bar>
      <span slot="center">购物街</span>
    </m2-nav-bar>
  </div>
</template>

<script>
  import './index.less'
  import { getMultiData } from 'services/home.service'

  export default {
    created() {
      getMultiData().then(res => console.log(res))
    }
  }
</script>
