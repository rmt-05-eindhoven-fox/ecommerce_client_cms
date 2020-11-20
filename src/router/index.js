import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/Signin-page.vue'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import EditForm from '../views/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn Page',
    component: SignIn
  },
  {
    path: '/Home',
    name: 'Home Page',
    component: Home
  },
  {
    path: '/AddProductForm',
    name: 'Add Product',
    component: AddProduct
  },
  {
    path: '/EditForm/:id',
    name: 'Edit Form',
    component: EditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name === 'SignIn Page' && token) {
    next({ name: 'Home Page' })
  } else {
    next()
  }
})

export default router
