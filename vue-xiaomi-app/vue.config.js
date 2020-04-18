const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const svgPath = resolve('./src/assets/svg')
const { title } = require('./package')

module.exports = {
  configureWebpack: {
    name: title,
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'config': '@/config',
        'layouts': '@/layouts',
        'models': '@/models',
        'mixins': '@/mixins',
        'services': '@/services',
        'utils': '@/utils',
        'views': '@/views'
      }
    }
  },
  // 添加对svg的自定义解析
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(svgPath)
    config.module.rule('icon').test(/\.svg$/)
      .include.add(svgPath).end() // 回退上下文
      .use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' }).end()
  },
  // 指定Runtime + Compile来编译组件
  runtimeCompiler: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixin.less')
      ]
    }
  },
  devServer: {
    host: 'localhost',
    port: 8083,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
