import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Products from '../components/Products.vue'
import store from '../store'

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
    component: Home,
    children: [
      {
        path: 'products',
        component: Products,
        children: [
          {
            path: 'add',
            component: () => import('../components/Form.vue')
          },
          {
            path: 'edit/:id',
            component: () => import('../components/Form.vue')
          }
        ]
      },
      {
        path: '*',
        component: NotFound
      }
    ]
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

router.beforeEach((to, from, next) => {
  if (to.path === '/home/products') store.commit('setProductsHeader', 'visible')
  else store.commit('setProductsHeader', 'hidden')
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.access_token) next({ name: 'Home' })
  else next()
})

export default router
