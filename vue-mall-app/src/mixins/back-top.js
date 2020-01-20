export default {
  data: () => ({
    isShowBacktop: false
  }),
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTop()
    },
    showBacktop(position, distance = 1000) {
      this.isShowBacktop = position > distance
    }
  }
}
