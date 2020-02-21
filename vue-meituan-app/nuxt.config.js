module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '北京美团网-北京美食|酒店|旅游|团购|电影|吃喝玩乐',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '北京美团网精选北京美食餐厅,酒店预订,电影票,旅游景点,外卖订餐,北京团购信息,您可查询商家评价店铺信息。北京生活,下载美团官方APP ,吃喝玩乐1折起。' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progre∂ss-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/main.css'
  ],

  babel: {
    plugins: [['component'], [
      {
        'libraryName': 'elment-ui',
        'styleLibraryName': 'theme-chalk'
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]],
    comments: true
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{src:'~plugins/element-ui', ssr:true}],

  /*
  ** Nuxt.js modules∂∂∂
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
