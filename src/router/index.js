import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: ':id',
      name: 'Update',
      component: Home
    }]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
