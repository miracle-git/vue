<template>
  <div class="card-list">
    <cart-item v-for="item in cartList" :key="item.id" :data="item"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CartItem from '../cart-item'

  export default {
    name: 'cart-list',
    computed: {
      ...mapState(['cartList'])
    },
    components: {
      CartItem
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
