import Vue from 'vue'
import VueX from 'vuex'
import { Devtools, devtoolsMiddleware } from 'vuex-devtools'
import { IsDev } from 'm2-core'

/**
 * @method 获取Vuex的Store对象
 * @param {Object} options 当前扩展配置(可能包含state, mutations, getters, actions, modules, devtools)
 * @returns {Object} 获取Store对象
 */
export function getStore(options = {}) {
  Vue.use(VueX)

  const { devtools = false, ...config } = options
  const { state, mutations, getters, actions, modules } = config
  const middlewares = []

  if (devtools || IsDev) {
    middlewares.push(devtoolsMiddleware)
  }

  return new VueX.Store({
    state, mutations, getters, actions, modules, middlewares
  })
}

// 导出Vuex-DevTools在app.vue中使用
export const DevTools = Devtools
