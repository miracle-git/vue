export default {
  data: () => ({
    currentType: 'pop'
  }),
  methods: {
    tabItemClick(type) {
      this.currentType = type
    }
  }
}
