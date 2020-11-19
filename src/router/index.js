import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/404',
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
  if (to.path !== '/login' && !localStorage.access_token) {
    next({ path: '/login' })
  } else if (to.path === '/login' && localStorage.access_token) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
