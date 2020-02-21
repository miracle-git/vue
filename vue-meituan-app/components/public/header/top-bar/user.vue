<template>
  <div class="mt-user">
    <template v-if="user">
      <span class="username">{{user}}</span>
      <nuxt-link to="/logout" class="logout">退出</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: ''
      }
    }
  }
</script>