import Vue from 'vue'

Vue.config.productionTip = false

/**
 * @method 渲染Vue应用的根组件
 * @param {Object} rootApp 当前应用的根组件(可能是对象或组件)
 * @param {Object} options 当前扩展配置(可能包含boot, router,store,lazy-load)
 * @returns {Object} 获取根组件的实例
 */
export function render(rootApp, options = {}) {
  if (!rootApp || (!rootApp.component && !rootApp.render)) {
    console.error('Vue根组件参数rootApp或rootApp.component尚未配置, 应用无法启动！')
    return
  }

  const { router, store, boot } = options

  typeof boot === 'function' && boot(Vue)

  return new Vue({
    router,
    store,
    render: h => h(rootApp.component || rootApp)
  }).$mount(rootApp.root || '#app')
}
