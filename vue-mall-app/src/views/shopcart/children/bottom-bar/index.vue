<template>
  <div class="bottom-bar">
    <span class="check-all" @click="checkAllItems" ><check-button :checked="checkedAll"/>全选</span>
    <span class="total-price">合计: <span>￥{{totalPrice}}</span></span>
    <span class="checkout right" :class="{'disabled':!checkedLength}">去结算<span v-if="checkedLength">({{checkedLength}})</span></span>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import { CheckButton } from 'components'

  export default {
    name: 'bottom-bar',
    computed: {
      ...mapState(['cartList']),
      ...mapGetters(['checkedAll', 'totalPrice', 'checkedLength'])
    },
    methods: {
      checkAllItems() {
        if (this.checkedAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      }
    },
    components: {
      CheckButton
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
