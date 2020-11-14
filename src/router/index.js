import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AddForm from '../views/AddForm.vue'
import UpdateProduct from '../views/UpdateForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: 'about' */ '../views/Dashboard.vue')
  },
  {
    path: '/add-product',
    name: 'AddForm',
    component: AddForm
  },
  {
    path: '/edit-product/:id',
    name: 'UpdateProduct',
    component: UpdateProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
