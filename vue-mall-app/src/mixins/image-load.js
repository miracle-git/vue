import { DataEvent } from 'm2-core'
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
      this.imageLoadListener = DataEvent.debounce(this.$refs.scroll.refresh)
      this.$bus.$on(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD, this.imageLoadListener)
    },
    cancelImageListener() {
      this.$bus.$off(EVENT_BUS_NAMES.PRODUCT_IMAGE_LOAD, this.imageLoadListener)
    }
  }
}
