<template>
  <div class="xm-order-header">
    <div class="container">
      <xm-logo/>
      <div class="title">
        <h2>{{title}}</h2>
        <slot/>
      </div>
      <div class="right">
        <a href="javascript:void(0);" class="username">{{userName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import XmLogo from '../xm-logo'

  export default {
    name: 'xm-order-header',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapState(['userName'])
    },
    components: {
      XmLogo
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
