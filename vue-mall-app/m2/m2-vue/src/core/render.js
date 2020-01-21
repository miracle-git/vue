import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import { DataType, DataEvent } from 'm2-core'
import filters from '../filters'

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
  // 为Vue实例挂载数据总线
  Vue.prototype.$bus = new Vue()
  // 为Vue实例挂载防抖节流
  Vue.prototype.$bus.$throttle = DataEvent.throttle
  Vue.prototype.$bus.$debounce = DataEvent.debounce
  // 为Vue注册全局过滤器
  filters.map(filter => Vue.filter(filter.name, filter.rule))
  // 获取配置参数
  const { router, store, init, fastclick = true, lazy = false } = options
  // 解决移动端的300ms延迟问题
  fastclick && FastClick.attach(document.body)
  // 启动图片懒加载
  DataType.isObject(lazy) && Vue.use(VueLazyLoad, lazy)
  // 在App渲染之前执行初始化
  typeof init === 'function' && init(Vue)

  return new Vue({
    router,
    store,
    render: h => h(rootApp.component || rootApp)
  }).$mount(rootApp.root || '#app')
}
