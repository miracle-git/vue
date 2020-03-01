<template>
  <div class="detail-page">
    <xm-product-header :data="product"/>
    <detail-info :data="product"/>
    <detail-tip/>
    <xm-bottom-bar/>
  </div>
</template>

<script>
  import { ProductInfoMixin } from 'mixins'
  import { XmProductHeader, XmBottomBar } from 'components'
  import { DetailInfo, DetailTip } from './children'

  export default {
    mixins: [ProductInfoMixin],
    components: {
      XmProductHeader,
      XmBottomBar,
      DetailInfo,
      DetailTip
    }
  }
</script>
