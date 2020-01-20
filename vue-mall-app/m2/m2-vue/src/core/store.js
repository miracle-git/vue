import Vue from 'vue'
import VueX from 'vuex'

/**
 * @method 获取Vuex的Store对象
 * @param {Object} options 当前扩展配置(可能包含state, mutations, getters, actions, modules, devtools)
 * @returns {Object} 获取Store对象
 */
export function getStore(options = {}) {
  Vue.use(VueX)

  const { state, mutations, getters, actions, modules } = options

  return new VueX.Store({
    state, mutations, getters, actions, modules
  })
}
