<template>
  <div class="login-form">
    <div class="container">
      <div class="login-info">
        <div class="form-title">
          <span class="active">账号登录</span>
          <span>扫码登录</span>
        </div>
        <div class="form-item">
          <input type="text" placeholder="请填写账号" v-model="username">
        </div>
        <div class="form-item">
          <input type="password" placeholder="请填写密码" v-model="password">
        </div>
        <div class="form-actions">
          <a href="javascript:void(0);" class="btn btn-xl btn-block btn-primary" @click="handleLogin">登录</a>
          <p class="other">
            <span class="left">
              <a href="javascript:void(0);">验证码登录</a>
              <a href="javascript:void(0);">微信登录</a>
            </span>
            <span class="right">
              <a href="javascript:void(0);" @click="handleRegister">立即注册</a>
              <a href="javascript:void(0);">忘记密码？</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'
  import { login, register } from 'services/user.service'

  export default {
    name: 'login-form',
    data: () => ({
      username: '',
      password: ''
    }),
    methods: {
      handleLogin() {
        const username = this.username.trim()
        const password = this.password.trim()
        if (!username || !password) {
          alert('请填写账号或密码！')
          return
        }
        // 验证通过后开始登录
        login(username, password).then(res => {
          this.$cookie.set(XM_APP_KEYS.loginUserId, res.id, { expires: 1 }) // 默认1天过期
          this.$router.push('/')
        }).catch(err => {
          alert(err.message)
        })
      },
      handleRegister() {
        const username = this.username.trim()
        const password = this.password.trim()
        const email = username + '@xiaomi.com'
        if (!username || !password) {
          alert('请填写账号或密码！')
          return
        }
        // 验证通过后开始注册
        register({ username, password, email }).then(res => {
          alert('注册成功！')
        }).catch(err => {
          alert(err.message)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
