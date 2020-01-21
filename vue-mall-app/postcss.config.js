module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应于设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应于设计稿的高度（可选配置）
      unitPrecision: 5, // 指定'px'转换为视窗单位的小数位数
      viewportUnit: 'vw', // 指定需要转换的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'nav-bar', 'tab-bar'], // 指定不需要转换的css类
      minPixelValue: 1, // 指定等于'1px'单位不需要转换
      mediaQuery: false // 是否允许在媒体查询中转换px
    }
  }
}
