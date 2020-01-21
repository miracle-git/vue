<template>
  <div class="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="avatar-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg fill="#fff" class="icon-mobile"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg fill="#fff" class="arrow-svg right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'user-info'
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
