<template>
  <div class="login-page">
    <login-header/>
    <login-form/>
    <login-footer/>
  </div>
</template>

<script>
  import { LoginHeader, LoginForm, LoginFooter } from './children'

  export default {
    components: {
      LoginHeader,
      LoginForm,
      LoginFooter
    }
  }
</script>
