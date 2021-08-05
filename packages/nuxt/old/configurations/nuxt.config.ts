import Vue from 'vue';

const installer: any = () => {
  Vue.use()
}

export class Base {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

  constructor(config?: any) { // TODO Config Interface

    this.head.title = (config) ? config.name || pkg.name : pkg.name'';

    if (pkg.dependencies['@enjine/plugins']) {
      this.plugins.push('@enjine/plugins')
    }

    if (config.components) {
      // // TODO add components Array as Vue.use() (Auto Nuxt Vue-Plugins)

    };

    if (config.theme) {
      this.css.push(config.theme)
    } else if (pkg.dependencies['@enjine/themes/basic']) {
      this.css.push('@enjine/themes/basic')
    };
  }
}
