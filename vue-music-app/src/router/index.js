import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@containers/recommend'
import Singer from '@containers/singer'
import SingerDetail from '@containers/singer-detail'
import Rank from '@containers/rank'
import Search from '@containers/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        { path: ':id', component: SingerDetail }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
