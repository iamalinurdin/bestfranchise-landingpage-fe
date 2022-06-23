import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/components/layout/MainLayout'
import career from './routes/career'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView'),
    meta: {
      layout: MainLayout
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      layout: MainLayout
    }
  },
  {
    path: '/produk/franchise',
    name: 'product.franchise',
    component: () => import('@/views/product/FranchiseView'),
    meta: {
      layout: MainLayout
    }
  },
  ...career,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
