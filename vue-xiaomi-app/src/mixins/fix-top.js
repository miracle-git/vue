export default {
  data: () => ({
    isFixed: false
  }),
  mounted() {
    window.addEventListener('scroll', this.initPageHeight)
  },
  methods: {
    initPageHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > this.scrollTop
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initPageHeight, false)
  }
}
