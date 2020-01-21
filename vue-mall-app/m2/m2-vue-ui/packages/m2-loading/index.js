import Vue from 'vue'
import Loading from './src/main'

const LoadingConstructor = Vue.extend(Loading)
LoadingConstructor.prototype.close = function() {
  this.visible = false
  document.body.removeChild(this.$el)
}

let instance = null

const loading = (message = '正在努力加载中...') => {
  instance = new LoadingConstructor({ data: { message } }).$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  return instance
}

loading.hide = () => instance.close()
export default loading
