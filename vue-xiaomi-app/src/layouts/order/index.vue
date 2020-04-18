<template>
  <div class="order-layout">
    <xm-order-header :title="title">
      <span>{{tips}}</span>
    </xm-order-header>
    <m2-router-view/>
    <xm-bottom-bar/>
    <xm-footer/>
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'
  import { XmOrderHeader, XmBottomBar, XmFooter } from 'components'

  export default {
    name: 'order-layout',
    data: () => ({
      title: '',
      tips: ''
    }),
    created() {
      this.$bus.$on(XM_APP_KEYS.updateOrderHeader, ({ title, tips = '' }) => {
        this.title = title
        this.tips = tips
      })
    },
    components: {
      XmOrderHeader,
      XmBottomBar,
      XmFooter
    }
  }
</script>
