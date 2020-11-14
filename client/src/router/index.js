import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/LoginForm.vue'
import AddProduct from '../components/AddForm.vue'
import EditProduct from '../components/EditForm'
import ProductItem from '../components/ProductItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/EditProduct',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product',
    name: 'product',
    component: ProductItem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
