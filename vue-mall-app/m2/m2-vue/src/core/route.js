import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * @method 获取路由配置对象
 * @param {Array} routesConfig 当前路由配置对象
 * @param {Object} options 当前扩展配置(可能包含mode,base,redirect)
 * @returns {Object} 获取路由配置对象
 */
export function getRouter(routesConfig, options = {}) {
  Vue.use(VueRouter)

  const { mode, base, redirect } = options
  redirect && routesConfig.unshift({ path: '', redirect })

  return new VueRouter({
    mode: mode || 'history',
    base: base || process.env.BASE_URL,
    routes: routesConfig
  })
}
