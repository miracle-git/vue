import { render } from 'm2-vue'
import M2 from 'm2-ui'
import { Message } from 'element-ui'
import App from './views/app'
import router from './router'
import store from './store'

export default render(App, {
  router,
  store,
  lazy: {
    preLoad: 1,
    loading: require('assets/img/loading/loading-bubbles.svg')
  },
  init: Vue => {
    Vue.use(M2)
    Vue.prototype.$message = Message
  }
})
