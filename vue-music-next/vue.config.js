const registerRouter = require('./server/router')

module.exports = {
  css: {
    // 全局引入variable和mixin
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  }
}
