<template>
  <section id="login-page" class="container mt-5 pt-5">
    <div class="row mt-5 pt-5">
      <div class="col-5 m-auto">
        <div class="card card-login">
          <div class="card-body shadow">
            <h5 class="card-title text-center">LOGIN</h5>
            <form @submit.prevent="login()" class="form-login">
              <div class="form-group">
                <label for="email-login">Email Address</label>
                <input v-model="user.email_login" type="email" id="email-login" class="form-control rounded-pill" placeholder="Email address" required autofocus autocomplete="off">
              </div>
              <div class="form-group">
                <label for="password-login">Password</label>
                <input v-model="user.password_login" type="password" id="password-login" class="form-control rounded-pill" placeholder="Password" required autofocus autocomplete="off">
              </div>
              <hr class="bg-light">
              <button class="btn btn-lg btn-primary btn-block mt-4 p-2 rounded-pill" type="submit">LOGIN</button>
              <hr class="bg-light">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      // LOGIN
      user: {
        email_login: '',
        password_login: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/loginAdmin',
        data: {
          email: this.user.email_login,
          password: this.user.password_login
        }
      }).then((result) => {
        const accessToken = result.data.access_token
        localStorage.setItem('access_token', accessToken)
        this.$router.push({ name: 'Dashboard' })
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    }
  }
}
</script>

<style>

</style>
