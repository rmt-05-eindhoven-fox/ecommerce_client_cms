import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Products from '../views/Products.vue'
import Banners from '../views/Banners.vue'
import Categories from '../views/Categories.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/products/:id',
    name: 'EditProduct',
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '/banners',
    name: 'Banners',
    component: Banners
  },
  {
    path: '/add-banners',
    name: 'AddBanner',
    component: () => import('../views/AddBanner.vue')
  },
  {
    path: '/edit-banners',
    name: 'EditBanner',
    component: () => import('../views/EditBanner.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/add-category',
    name: 'AddCategory',
    component: () => import('../views/AddCategory.vue')
  },
  {
    path: '/edit-category',
    name: 'EditCategory',
    component: () => import('../views/EditCategory.vue')
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
