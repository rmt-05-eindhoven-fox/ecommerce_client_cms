import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../views/AddProduct.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/products/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.access_token) {
    next({ path: '/' })
  } else if ((to.path === '/' || to.path === '/products' || to.path === '/products/:id') && !localStorage.access_token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
