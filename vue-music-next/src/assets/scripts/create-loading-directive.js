import { createApp } from 'vue'
import { append, remove } from './dom'

export default function createLoadingDirective(component) {
  return {
    mounted(el, binding) {
      const app = createApp(component)
      const instance = app.mount(document.createElement('div'))
      el.instance = instance
      const title = binding.arg
      if (typeof title === 'string' && title) {
        el.instance.title = title
      }
      binding.value && append(el)
    },
    updated(el, binding) {
      const title = binding.arg
      if (typeof title === 'string' && title) {
        el.instance.title = title
      }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }
}
