import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'Products',
        path: 'products',
        component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
        children: [
          {
            name: 'ProductCategories',
            path: 'category/:id',
            component: () => import(/* webpackChunkName: "about" */ '../views/CategoryProduct.vue')
          }
        ]
      },
      {
        name: 'Categories',
        path: 'categories',
        component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
      },
      {
        name: 'AddProduct',
        path: '/products/add',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddProduct.vue')
      },
      {
        name: 'EditProduct',
        path: '/products/edit/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditProduct.vue')
      },
      {
        name: 'Banner',
        path: '/banners',
        component: () => import(/* webpackChunkName: "about" */ '../views/Banner.vue')
      },
      {
        name: 'AddBanner',
        path: '/banners/add',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddBanner.vue')
      },
      {
        name: 'EditBanner',
        path: '/banners/edit/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditBanner.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (to.name !== 'Login' && !accessToken) next({ name: 'Login' })
  else next()
})

export default router
