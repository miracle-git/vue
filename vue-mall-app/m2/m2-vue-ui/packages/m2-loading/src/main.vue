<template>
  <div class="m2-loading">
    <transition name="fade">
      <div class="mask" v-show="visible">
        <div class="spinner">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div class="text">{{message}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'm2-loading',
    data: () => ({
      visible: false,
      message: ''
    })
  }
</script>
