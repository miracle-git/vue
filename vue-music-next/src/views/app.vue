<template>
  <vm-header/>
  <vm-tabbar/>
  <router-view/>
  <vm-player/>
</template>

<script>
  import { Header, Tabbar, Player } from '@/components'

  export default {
    components: {
      VmHeader: Header,
      VmTabbar: Tabbar,
      VmPlayer: Player
    }
  }
</script>
