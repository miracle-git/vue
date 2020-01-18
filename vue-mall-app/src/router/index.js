import { getRouter } from 'm2-vue'

const routes = [
  { path: '/home', component: () => import('views/home'), meta: { keepAlive: true, level: 1 } },
  { path: '/category', component: () => import('views/category'), meta: { keepAlive: true, level: 1 } },
  { path: '/shopcart', component: () => import('views/shopcart'), meta: { keepAlive: true, level: 1 } },
  { path: '/profile', component: () => import('views/profile'), meta: { keepAlive: true, level: 1 } }
]

export default getRouter(routes, { redirect: '/home' })
