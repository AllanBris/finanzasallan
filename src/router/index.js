import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'


const requireAuth = (to, from, next) => { 
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe()
    if (user) {
      next()
    } else {
      next('/auth')
    }
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView 
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: () => import('../views/AddTransactionsView.vue'),
      beforeEnter: requireAuth
    },
  ]
})

export default router
