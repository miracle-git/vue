<template>
  <div class="shopcart-page">
    <xm-order-header title="我的购物车">
      <span>温馨提示：确认产品成功下单，请尽快结算。</span>
    </xm-order-header>
    <shopcart-list/>
    <xm-bottom-bar/>
    <xm-footer/>
  </div>
</template>

<script>
  import { XmOrderHeader, XmBottomBar, XmFooter } from 'components'
  import { ShopcartList } from './children'

  export default {
    name: 'order-layout',
    components: {
      XmOrderHeader,
      XmBottomBar,
      XmFooter,
      ShopcartList
    }
  }
</script>
