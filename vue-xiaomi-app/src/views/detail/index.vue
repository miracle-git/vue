<template>
  <div class="detail-page">
    <xm-product-header :data="product">
      <a href="javascript:void(0)" class="btn btn-primary" @click="addToCart($route.params.id)">加入购物车</a>
    </xm-product-header>
    <detail-info :data="product"/>
    <detail-tip/>
    <xm-cart-modal/>
    <xm-bottom-bar/>
  </div>
</template>

<script>
  import { ProductInfoMixin } from 'mixins'
  import { XM_APP_KEYS } from 'config/app.conf'
  import { XmProductHeader, XmCartModal, XmBottomBar } from 'components'
  import { DetailInfo, DetailTip } from './children'

  export default {
    mixins: [ProductInfoMixin],
    methods: {
      addToCart(id) {
        this.$bus.$emit(XM_APP_KEYS.addToCart, id)
      }
    },
    components: {
      XmProductHeader,
      XmCartModal,
      XmBottomBar,
      DetailInfo,
      DetailTip
    }
  }
</script>
