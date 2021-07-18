import { createApp } from 'vue'
import App from './views/app.vue'
import router from './router'
import store from './store'
// 引入全局样式
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).mount('#app')
