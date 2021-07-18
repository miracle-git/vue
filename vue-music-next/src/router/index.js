import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/recommend', name: 'Recommend', component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend') },
  { path: '/singer', name: 'Singer', component: () => import(/* webpackChunkName: "singer" */ '@/views/singer') },
  { path: '/rank', name: 'Rank', component: () => import(/* webpackChunkName: "rank" */ '@/views/rank') },
  { path: '/search', name: 'Search', component: () => import(/* webpackChunkName: "search" */ '@/views/search') },
  { path: '/user', name: 'User', component: () => import(/* webpackChunkName: "user" */ '@/views/user') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
