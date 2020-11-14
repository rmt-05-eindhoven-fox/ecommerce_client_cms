import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NotFound from '../views/NotFound.vue'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(VueLoading)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/dashboard',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/HomePage.vue')
  },
  {
    path: '/addProduct',
    name: 'AddPage',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/AddPage.vue')
  },
  {
    path: '/addBanner',
    name: 'AddBanner',
    component: () => import(/* webpackChunkName: "addBanner" */ '../views/AddBanner.vue')
  },
  {
    path: '/banner',
    name: 'BannerPage',
    component: () => import(/* webpackChunkName: "banner" */ '../views/BannerPage.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditPage',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/EditPage.vue')
  },
  {
    path: '/editBanner/:id',
    name: 'EditBanner',
    component: () => import(/* webpackChunkName: "editBanner" */ '../views/EditBannerPage.vue')
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
