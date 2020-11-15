<template>
  <section class="login-page">
    <LoginCard />
  </section>
</template>

<script>
import LoginCard from '@/components/LoginCard.vue'
// import axios from '../axios/axios.js'
export default {
  name: 'Login',
  components: {
    LoginCard
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('token')
    if (token) {
      next('/dashboard')
    } else {
      next()
    }
  }
}
</script>

<style>
</style>
