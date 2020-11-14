import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../views/AddProduct.vue'
import ProductDetail from '../views/ProductDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/product',
      name: 'Products',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product-add',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  next()
  if (!accessToken) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
