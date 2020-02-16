const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'config': '@/config',
        'models': '@/models',
        'mixins': '@/mixins',
        'services': '@/services',
        'utils': '@/utils',
        'views': '@/views'
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixin.less')
      ]
    }
  }
}
