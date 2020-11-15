import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'
import Login from '../views/LoginForm.vue'
import editPage from '../components/EditForm.vue'
import addPage from '../components/AddForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/editPage/:id',
    name: 'editPage',
    component: editPage
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: addPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
