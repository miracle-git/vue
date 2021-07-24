import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/recommend', component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend') },
  {
    path: '/singer', component: () => import(/* webpackChunkName: "singer" */ '@/views/singer'),
    children: [
      { path: ':id', component: () => import(/* webpackChunkName: "singer-detail" */ '@/views/singer/singer-detail') }
    ]
  },
  { path: '/rank', component: () => import(/* webpackChunkName: "rank" */ '@/views/rank') },
  { path: '/search', component: () => import(/* webpackChunkName: "search" */ '@/views/search') },
  { path: '/user', component: () => import(/* webpackChunkName: "user" */ '@/views/user') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
