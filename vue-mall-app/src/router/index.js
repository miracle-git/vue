import { getRouter } from 'm2-vue'

const routes = [
  { path: '/home', component: () => import('views/home') },
  { path: '/category', component: () => import('views/category') },
  { path: '/shopcart', component: () => import('views/shopcart') },
  { path: '/profile', component: () => import('views/profile') }
]

export default getRouter(routes, { redirect: '/home' })
