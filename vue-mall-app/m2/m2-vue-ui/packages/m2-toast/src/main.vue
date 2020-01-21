<template>
  <div class="m2-toast">
    <transition name="fade">
      <div class="toast" v-show="visible">
        <span>{{message}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'm2-toast',
    data: () => ({
      visible: false,
      message: ''
    })
  }
</script>
