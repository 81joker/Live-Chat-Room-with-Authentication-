import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
