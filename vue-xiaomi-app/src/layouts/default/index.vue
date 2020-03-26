<template>
  <div class="default-layout">
    <xm-header/>
    <m2-route-view/>
    <xm-footer/>
  </div>
</template>

<script>
  import { XmHeader, XmFooter } from 'components'

  export default {
    name: 'default-layout',
    components: {
      XmHeader,
      XmFooter
    }
  }
</script>
