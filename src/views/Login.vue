<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="shadow-lg container rounded bg-dark text-white mb-3 p-3 rounded" id="div-container">
      <h1>WELCOME</h1>
      <form class="text-left mb-3">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" v-model="emailLogin" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="passwordLogin" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="postLogin">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from '../axios/axiosInstance.js'
export default {
  name: 'Login',
  data () {
    return {
      emailLogin: '',
      passwordLogin: ''
    }
  },
  methods: {
    postLogin () {
      const objParams = {
        email: this.emailLogin,
        password: this.passwordLogin
      }
      this.$store.dispatch('postLogin', objParams)
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          localStorage.setItem('username', data.username)
          this.$router.push('Product')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
  #div-container{
    width: 50%;
  }
  .d-flex{
    height: 100vh;
  }
</style>
