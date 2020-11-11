<template>
  <div class="login-form container mt-5">
    <div class="row justify-content-center">
      <div class="col-4 p-3 mt-5 shadow rounded">
        <h1 class="mt-2" style="margin-bottom: 20px">Eindhovenfox</h1>
        <img
          class="duck-logo"
          alt="Duck Logo"
          src="../assets/duck.jpg"
          style="width: 300px"
        />
        <form @submit.prevent="login" id="login-form">
          <div class="form-group">
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              id="login-email"
              aria-describedby="emailHelp"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <small class="form-text"
            >Only for admin that is allowed to login here</small
          >
          <button type="submit" class="login-btn mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from '@/axios/axiosInstance.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      }

      this.$store.dispatch('login', payload)
    }
  }
}
</script>
