import path from 'path'
import defu from 'defu'

const pkg = {} // TODO

export default {
  srcDir: __dirname,
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  telemetry: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // './assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@enjine/nuxt'
    // ['@nuxtjs/proxy', {    "/api/": { target: 'http://localhost:888/api'} }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-import": {
          path: ["../assets/", "../components/@css", "../components"]
        }
      }
    }
  }
}
