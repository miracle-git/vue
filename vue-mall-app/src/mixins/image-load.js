import { EVENT_BUS_NAMES } from 'config/app.conf'

export default {
  data: () => ({
    imageLoadListener: null
  }),
  mounted() {
    this.loadImageListener()
  },
  methods: {
    loadImageListener() {
      this.imageLoadListener = this.$bus.$debounce(this.$refs.scroll.refresh)
      this.$bus.$on(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD, this.imageLoadListener)
    },
    cancelImageListener() {
      this.$bus.$off(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD, this.imageLoadListener)
    }
  }
}
