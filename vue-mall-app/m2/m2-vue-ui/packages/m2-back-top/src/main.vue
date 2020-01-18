<template>
  <div class="m2-back-top" v-show="visible">
    <img :src="icon" alt="">
  </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'm2-back-top',
    props: {
      icon: {
        type: String,
        default: require('./top.png')
      },
      visible: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
