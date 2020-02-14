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
  }
}
