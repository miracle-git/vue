import { createApp } from 'vue'
import { append, remove } from './dom'

export default function createLoadingDirective(component) {
  return {
    mounted(el, binding) {
      const app = createApp(component)
      const instance = app.mount(document.createElement('div'))
      el.instance = instance

      binding.value && append(el)
    },
    updated(el, binding) {
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }
}
