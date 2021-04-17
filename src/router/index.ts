import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GeneralLayout from '@/layouts/General/index.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'GeneralLayout',
    component: GeneralLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
      },
    ]
  },
  {
    path: '/home',
    name: 'HomeTest',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Playground/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
