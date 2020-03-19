module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nissa.local',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap&subset=cyrillic'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,900&display=swap&subset=cyrillic'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#242424'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    {src: '~assets/bootstrap.scss', lang: 'scss'},
    {src: '~assets/style.scss', lang: 'scss'},
  ],

  plugins: [
    {src: '~plugins/fontawesome.js'}
  ],

  buildModules: [
    '@nuxtjs/moment'
  ],

  moment: {
    locales: ['ru']
  },

  extractCSS: {
    allChunks: true
  }
};

