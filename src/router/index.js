import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import CreateProduct from '../views/CreateProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import CreateCategory from '../views/CreateCategory.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/createProduct',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/createCategory',
    name: 'CreateCategory',
    component: CreateCategory
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && localStorage.access_token) {
    next()
  } else if (to.name !== 'LandingPage' && !localStorage.access_token) {
    next({ name: 'LandingPage' })
  } else if (to.name === 'LandingPage' && localStorage.access_token) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
