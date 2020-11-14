import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import Banner from '../views/Banner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        name: 'Product',
        path: 'products',
        component: Products
      },
      {
        name: 'Banner',
        path: 'banner',
        component: Banner
      },
    ],
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem("token");
    //     if (token) {
    //       next()
    //     } else {
    //       next('/')
    //     }
    //   // this.name = to.params.name
    //   // console.log(to)
    //   // console.log(from)
    //   // next()
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && !token) next({ name: 'Login' })
  else if (to.name == 'Login' && token) next("/dashboard/products")
  else next()
})

export default router
