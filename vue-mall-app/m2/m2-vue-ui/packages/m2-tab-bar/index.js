import TabBar from './src/main'

TabBar.install = (Vue) => {
  Vue.component(TabBar.name, TabBar)
}

export default TabBar
