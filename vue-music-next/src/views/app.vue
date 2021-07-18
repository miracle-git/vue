<template>
  <vm-header/>
  <vm-tabbar/>
  <router-view/>
</template>

<script>
  import { Header, Tabbar } from '@/components'

  export default {
    components: {
      VmHeader: Header,
      VmTabbar: Tabbar
    }
  }
</script>
