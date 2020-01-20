import Swiper from './src/main'

Swiper.install = (Vue) => {
  Vue.component(Swiper.name, Swiper)
}

export default Swiper
