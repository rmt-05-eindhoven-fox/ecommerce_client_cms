import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Product from '../components/List-Product.vue'
import AddProduct from '../components/Add-Product'
import EditProduct from '../components/Edit-Product'

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
    component: Dashboard,
    children: [
      {
        path: 'product',
        component: Product
      },
      {
        path: 'addProduct',
        component: AddProduct
      },
      {
        path: 'editProduct/:id',
        component: EditProduct
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
