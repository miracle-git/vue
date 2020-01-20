## m2-vue

[![](https://img.shields.io/badge/m2--vue-v1.0.0-green.svg)](https://github.com/miracle-git/m2.git) <br/>
The package is provided facilities and utilities based on vue.

### Usage
- Install
```bash
npm install m2-vue
yarn add m2-vue
```
### APIs
- `render` **function** Render the root component with the param *rootApp*.
 ####
 | param | type | description | default | example |
 | ------------ | ------------ | ------------ | ------------ | ------------ |
 | rootApp | object | the root component |  |
 | options | object | the config options | {} |
 ```js
 import { render } from 'm2-vue'
 import VueUI from 'm2-vue-ui'
 import App from './views/app'
 import router from './router'
 import store from './store'
 import 'm2-vue-ui/lib/theme/base.css'
 
 render(App, {
   router,
   store,
   init: Vue => {
     Vue.use(VueUI)
   }
 })
 
 // render({ component: App, root: '#root' }, {
 //   router,
 //   store,
 //   init: Vue => {
 //     Vue.use(VueUI)
 //   }
 // })
```
- `getRouter` **function** Get the app router with the params *routerConfig*.
 ####
 | param | type | description | default | example |
 | ------------ | ------------ | ------------ | ------------ | ------------ |
 | routerConfig | Array | the router config |  |
 | options | object | the config options | { mode: 'hash', redirect: '/home' } |
 ```js
 import { getRouter } from 'm2-vue'
 
 const routes = [
   { path: '/home', component: () => import('views/home') },
   { path: '/category', component: () => import('views/category') },
   { path: '/shopcart', component: () => import('views/shopcart') },
   { path: '/profile', component: () => import('views/profile') }
 ]
 
 export default getRouter(routes, { redirect: '/home' })
```
