const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Personal_Site/'
  }
} : {}

export default {

  ...routerBase,
  /*
  ** Setup process.env variable
  */
  env: {
    imgPrefix: process.env.DEPLOY_ENV === 'GH_PAGES' ? '' : '/'
  },

  /**
   ** Setup webpage mode
   */
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons' },
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-material.js',
    '~/plugins/i18n.js',
    '~/plugins/vue-clickaway.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    icon: {
      iconSrc: '/icon.png'
    },
    manifest: {
      name: 'Robbie Verdurme',
      short_name: 'Robbie Verdurme',
      lang: 'en'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader'
          }
        ]
      })
    }
  }
}
