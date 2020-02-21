<template>
  <div class="mt-nav">
    <ul class="nav">
      <li class="nav-item nav-item-dropdown">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl class="list">
          <dd><nuxt-link to="/order">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/order">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/order">抵用券</nuxt-link></dd>
          <dd><nuxt-link to="/order">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li class="nav-item">
        <nuxt-link to="/app">手机App</nuxt-link>
      </li>
      <li class="nav-item nav-item-dropdown nav-item-merchant">
        <span class="link">商家中心</span>
        <dl class="list">
          <dd><nuxt-link to="/order">登录商家中心</nuxt-link></dd>
          <dd><nuxt-link to="/order">美团智能收银</nuxt-link></dd>
          <dd><nuxt-link to="/order">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="/order">手机免费开店</nuxt-link></dd>
          <dd><nuxt-link to="/order">餐饮代理商招募</nuxt-link></dd>
          <dd><nuxt-link to="/order">商家申请开票</nuxt-link></dd>
        </dl>
      </li>
      <li class="nav-item nav-item-dropdown nav-item-site">
        <span class="link">网站导航</span>
        <div class="list">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>经济型酒店</dd>
            <dd>舒适型酒店</dd>
            <dd>豪华型酒店</dd>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>经济型酒店</dd>
            <dd>舒适型酒店</dd>
            <dd>豪华型酒店</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>火锅</dd>
            <dd>自助餐</dd>
            <dd>特色小吃</dd>
            <dd>自助餐</dd>
            <dd>特色小吃</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>国内影片</dd>
            <dd>好莱坞大片</dd>
            <dd>欧美大片</dd>
            <dd>港台电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app"></a></dd>
            <dd><a href="https://waimai.meituan.com/mobile/download/default" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"></a></dd>
            <dd><a href="https://phoenix.meituan.com/app/" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" title="榛果app" alt="榛果app"></a></dd>
            <dd><a href="https://www.dianping.com/events/m/index.htm" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"></a></dd>
            <dd><a href="https://maoyan.com/app" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app"></a></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
