import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { auth: true }
  },
  {
    path: '/usermanager',
    name: 'Usermanager',
    component: () => import('../views/Users.vue'),
    meta: { auth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage && localStorage.getItem('ticket_token') || Vue.prototype.$session.ticket && Vue.prototype.$session.ticket.user) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
