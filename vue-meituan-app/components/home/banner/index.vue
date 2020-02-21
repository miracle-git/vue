<template>
  <div class="mt-banner">
    <el-row>
      <el-col :span="14">
        <mt-slider/>
      </el-col>
      <el-col :span="4">
        <div class="mt-banner-entertainment"/>
      </el-col>
      <el-col :span="6">
        <div class="mt-banner-account">
          <div class="avatar">
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="头像">
          </div>
          <p class="login-user"><span class="login-info">Hi，您好！</span></p>
          <p class="register">
            <nuxt-link to="/register">
              <el-button round size="medium">注册</el-button>
            </nuxt-link>
          </p>
          <p class="login">
            <nuxt-link to="/login">
              <el-button round size="medium">登录</el-button>
            </nuxt-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="mt-banner-hotel"/>
      </el-col>
      <el-col :span="7">
        <div class="mt-banner-music"/>
      </el-col>
      <el-col :span="4">
        <div class="mt-banner-cooperation"/>
      </el-col>
      <el-col :span="6">
        <div class="mt-banner-mobile">
          <div class="qrcode">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          </div>
          <p class="download-app">美团App手机版</p>
          <p class="desc">
            <span class="highlight">1元起</span>
            <span>吃喝玩乐</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MtSlider from './slider'

  export default {
    components: {
      MtSlider
    }
  }
</script>