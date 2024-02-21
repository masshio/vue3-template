import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tailwind',
      name: 'tailwind',
      component: () => import('../views/tailwind/tailwind.vue')
    },
    {
      path: '/gsap',
      name: 'gsap',
      component: () => import('../views/gsap/index.vue')
    },
    {
      path: '/gsap/screen',
      name: 'gsapScreen',
      component: () => import('../views/gsap/screen.vue')
    },
    {
      path: '/gsap/timeline',
      name: 'timeline',
      component: () => import('../views/gsap/timeline.vue')
    },
  ]
})

export default router
