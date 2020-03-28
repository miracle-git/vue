import { getRouter } from 'm2-vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: 'home', component: () => import('views/home') },
      { path: 'product/:id', component: () => import('views/product') },
      { path: 'detail/:id', component: () => import('views/detail') }
    ]
  },
  { path: '/login', component: () => import('views/login') },
  { path: '/shopcart', component: () => import('views/shopcart') },
  {
    path: '/order',
    component: () => import('layouts/order'),
    children: [
      { path: 'list', component: () => import('views/order') },
      { path: 'confirm', component: () => import('views/confirm') },
      { path: 'payment', name: '/order/payment', component: () => import('views/payment') }
    ]
  }
]

export default getRouter(routes, { redirect: '/home' })
