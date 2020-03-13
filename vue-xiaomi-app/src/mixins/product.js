import { getProductInfo } from 'services/product.service'

export default {
  data: () => ({
    product: {}
  }),
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  created() {
    this.getProductInfo()
  },
  methods: {
    getProductInfo() {
      getProductInfo(this.id).then(res => this.product = res)
    }
  }
}
