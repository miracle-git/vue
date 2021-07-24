export const loadingDirective = require('./loading').default
export const noResultDirective = require('./no-result').default

export default {
  install(Vue) {
    const directives = [loadingDirective, noResultDirective]
    directives.forEach(item => Vue.directive(item.name, item.directive))
  }
}
