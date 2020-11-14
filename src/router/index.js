import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Products from '@/components/Products.vue'
import Dashboard from '@/components/Dashboard.vue'
import EditProduct from '@/components/EditProduct.vue'
import AddProduct from '@/components/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) next()
      else next('/login')
    },
    children: [
      {
        path: 'products',
        name: 'Product list',
        component: Products
      },
      {
        path: 'add/product',
        name: 'Add product',
        component: AddProduct
      },
      {
        path: ':id/product',
        name: 'Edit Product',
        component: EditProduct
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (Boolean(localStorage.getItem('access_token')) === false) next()
      else next('/')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
