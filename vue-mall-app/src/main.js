import { render } from 'm2-vue'
import VueUI from 'm2-vue-ui'
import App from './views/app'
import router from './router'
import store from './store'

render(App, {
  router,
  store,
  boot: Vue => {
    Vue.use(VueUI)
  }
})
