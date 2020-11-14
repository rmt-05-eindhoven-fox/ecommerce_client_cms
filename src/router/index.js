import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../components/dashboard/Home.vue')
      },
      {
        path: 'products',
        name: 'Product',
        component: () => import('../components/product/Product.vue')
      },
      {
        path: 'banners',
        name: 'Banner',
        component: () => import('../components/banner/Banner.vue')
      },
      {
        path: 'categories',
        name: 'Category',
        component: () => import('../components/category/Category.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')
  if (to.name !== 'Login' && (!token || role !== 'admin')) {
    localStorage.clear()
    router.push({ path: 'Login' })
      .catch(() => {
        // console.info(error.message)
      })
  } else if (to.name === 'Login' && token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
