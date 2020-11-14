import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {

    path: '/addProduct',
    name: 'AddProduct',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/AddProduct.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: () => import(/* webpackChunkName: "editProduct" */ '../views/EditProduct.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
