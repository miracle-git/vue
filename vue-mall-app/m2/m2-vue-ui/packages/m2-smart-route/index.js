import SmartRoute from './src/main'

SmartRoute.install = (Vue) => {
  Vue.component(SmartRoute.name, SmartRoute)
}

export default SmartRoute
