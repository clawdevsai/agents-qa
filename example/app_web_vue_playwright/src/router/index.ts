import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import { STORAGE_KEY } from '../constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { guestOnly: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to) => {
  const hasSession =
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)
  if (to.meta.requiresAuth && !hasSession) {
    return { name: 'login' }
  }
  if (to.meta.guestOnly && hasSession) {
    return { name: 'dashboard' }
  }
  return true
})

export default router
