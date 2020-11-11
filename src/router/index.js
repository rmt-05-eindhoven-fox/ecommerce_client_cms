import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../components/dashboard/Home.vue')
      },
      {
        path: 'products',
        name: 'Product',
        component: () => import('../components/product/Product.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
