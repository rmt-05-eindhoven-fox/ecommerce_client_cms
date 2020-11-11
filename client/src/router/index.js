import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: () => import('../components/AddProduct.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: () => import('../components/EditProduct.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth) && localStorage.token) {
    next()
  } else if (to.name !== 'Login' && !localStorage.token) {
    next({ path: '/login' })
  } else if (to.name === 'Login' && localStorage.token) {
    next({ path: 'Dashboard' })
  } else {
    next()
  }
})

export default router
