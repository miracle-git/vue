import Vue from 'vue'
import Toast from './src/main'

const ToastConstructor = Vue.extend(Toast)
ToastConstructor.prototype.close = function() {
  this.visible = false
  document.body.removeChild(this.$el)
}

const toast = (message = 'toast message', duration = 2000) => {
  const instance = new ToastConstructor({ data: { message } }).$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  instance.visible = true
  Vue.nextTick(() => {
    setTimeout(() => instance.close(), duration)
  })
  return instance
}

export default toast
