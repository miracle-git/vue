import { render } from 'm2-vue'
import VueUI from 'm2-vue-ui'
import App from './views/app'
import router from './router'
import store from './store'

export default render(App, {
  router,
  store,
  lazy: {
    preLoad: 1,
    loading: require('assets/img/common/loading.gif')
  },
  init: Vue => {
    Vue.use(VueUI)
  }
})
