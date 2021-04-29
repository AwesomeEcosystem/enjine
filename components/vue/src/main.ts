import Vue from 'vue'
import Sandbox from './Sandbox.vue'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Sandbox),
}).$mount('#app')
