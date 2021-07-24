import { createApp } from 'vue'
import lazy from 'vue3-lazy'
import App from './views/app.vue'
import router from './router'
import store from './store'
import directives from './directives'
// 引入全局样式
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).use(lazy, {
  loading: require('@/assets/images/default.png')
}).use(directives).mount('#app')
