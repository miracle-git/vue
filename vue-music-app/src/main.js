import 'babel-polyfill'
import fc from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import '@assets/stylus/index.styl'

/* fix the issue to about 300ms postpone when the button clicked */
fc.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('@assets/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
