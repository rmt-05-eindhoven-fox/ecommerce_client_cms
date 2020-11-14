import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import NotFound from '../views/NotFound.vue'
import AddProduct from '../views/AddProduct.vue'
import LandingPage from '../views/LandingPage.vue'
import DataProduct from '@/components/DataProduct.vue'
import EditProduct from '@/components/EditProduct.vue'
import DeleteProduct from '@/components/DeleteProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/landing-page',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "product" */ '../views/Products.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    children: [
      {
        path: 'data-product',
        component: DataProduct
      },
      {
        path: 'edit-product',
        component: EditProduct
      },
      {
        path: 'delete-product',
        component: DeleteProduct
      }
    ]
  },
  {
    path: '/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
