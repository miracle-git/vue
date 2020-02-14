<template>
  <div class="order-layout">
    <xm-order-header/>
    <m2-smart-route/>
    <xm-footer/>
  </div>
</template>

<script>
  import { XmOrderHeader, XmFooter } from 'components'

  export default {
    name: 'order-layout',
    components: {
      XmOrderHeader,
      XmFooter
    }
  }
</script>
