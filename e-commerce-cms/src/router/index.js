import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
import ListProduct from '../components/ListProduct.vue'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(VueLoading)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'ListProduct',
        component: ListProduct
      },
      {
        path: '/Dashboard/Add',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: '/Dashboard/Edit/:id',
        name: 'EditProduct',
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  else next()
})

export default router
