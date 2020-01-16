import NavBar from './src/main'

NavBar.install = (Vue) => {
  Vue.component(NavBar.name, NavBar)
}

export default NavBar
