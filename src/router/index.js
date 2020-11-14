import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login Page',
    component: Login
  },
  {
    path: '/content',
    name: 'Content',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
  },
  {
    path: '/add',
    name: 'Add Page',
    component: () => import(/* webpackChunkName: "add" */ '../views/AddPage.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit Page',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
