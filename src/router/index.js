import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePageView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPageView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/RegisterPageView.vue')
    }
  ]
})

export default router
