<template>
  <div class="container d-flex justify-content-center align-items-center" style="height:100vh;">
    <div class="justify-content-center align-items-center card shadow rounded" style="height:50vh; width:80vh;">
      <div class="form-input">
        <div class="row">
          <h3>WELCOME TO E-COMMERCE CMS APP</h3>
        </div>
        <div v-if="error" class="alert alert-danger text-center" role="alert">
          <p v-for="(er, i) in error" :key="i">{{ er }}</p>
        </div>
        <form @submit.prevent="logingIn">
          <div class="row">
            <input class="form-control text-center shadow" type="email" v-model="email" name="email" placeholder="Insert Email Here">
          </div>
          <div class="row">
            <input class="form-control text-center shadow" type="password" v-model="password" name="password" placeholder="Insert Password Here">
          </div>
          <div class="row justify-content-center">
            <button class="btn btn-primary " type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'
export default {
  name: 'login-page',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    error () {
      return this.$store.state.error
    }
  },
  methods: {
    logingIn () {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          this.$router.push({ path: '/content' })
        })
        .catch(err => {
          this.$store.dispatch('errorHandling', err.response.data)
          setTimeout(() => {
            this.$store.commit('errorHandling', '')
          }, 3000)
        })
    }
  },
  created () {
    const token = localStorage.getItem('token')
    if (token) {
      this.$router.push({ path: '/content' })
    }
  }
}
</script>

<style >
</style>
