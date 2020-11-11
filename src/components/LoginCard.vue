<template>
  <div class="card-login">
    <div class="card">
      <div class="card-body">
        <h3>CMS E-commerce</h3>
        <small id="emailHelp" class="form-text text-center text-muted mb-2"
          >Login with admin account to access CMS</small
        >
        <form @submit.prevent="userLogin">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-block">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axios.js'
export default {
  name: 'LoginCard',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    userLogin () {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.access_token)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  }
}
</script>

<style></style>
