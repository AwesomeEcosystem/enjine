import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/main.css'

Vue.config.productionTip = false

import { Session } from '@scale/session'

Vue.prototype.$session = new Session({
  host: 'localhost:9090',
  gateway: 'auth'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
