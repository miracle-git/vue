import { createApp } from 'vue'
import { append, remove } from './dom'

export default function createDirective(component) {
  return {
    mounted(el, binding) {
      const app = createApp(component)
      const componentName = component.name
      const instance = app.mount(document.createElement('div'))
      if (!el[componentName]) {
        el[componentName] = {}
      }
      el[componentName].instance = instance
      const title = binding.arg
      if (typeof title === 'string' && title) {
        el[componentName].instance.title = title
      }
      binding.value && append(el, componentName)
    },
    updated(el, binding) {
      const title = binding.arg
      const componentName = component.name
      if (typeof title === 'string' && title) {
        el[componentName].instance.title = title
      }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el, componentName) : remove(el, componentName)
      }
    }
  }
}
