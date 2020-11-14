import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue'),
    meta: {guest: true},
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home.vue'),
    meta: {requiresAuth: true},
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {  
    if (store.getters.isAuthenticated) {
      next();
      return;
    }else{
      next("/");
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/home");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
