<template>
  <div class="default-layout">
    <xm-header/>
    <m2-router-view/>
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
