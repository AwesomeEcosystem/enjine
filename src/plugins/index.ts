import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import Components from '@enjine/components'

// declare module 'vue/types/vue' {
//   interface Vue {
//     $session(config?: any): void
//   }
// }
//
// declare module '@nuxt/types' {
//   interface Context {
//     $myInjectedFunction(message: string): void
//   }
// }


const plugin: Plugin = (context) => {
  Vue.use(Components)
  // context.$myInjectedFunction = (message: string) => console.log(message)
}

export default plugin
