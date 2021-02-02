import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Apps'
  },
  {
    path: '/Apps',
    component: () => import ('../views/Apps.vue')
  },
  {
    path: '/Settings',
    component: () => import ('../views/Settings.vue')
  },
  {
    path: '/Users',
    component: () => import ('../views/Users.vue')
  },
  {
    path: '/Databases',
    component: () => import ('../views/Databases.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
