import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import EditProduct from '../views/EditProduct'
import AddProduct from '../views/AddProduct'

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
    path: '/products/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/products',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('access_token')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.getItem('access_token')) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
