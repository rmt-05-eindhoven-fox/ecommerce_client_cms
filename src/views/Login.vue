<template>
  <div>
    <div class="container m-5">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-header">
              <h3>Login Page</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <button @click="$router.push({ name: 'Landing' })" type="button" class="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios/axiosInstance'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          const accessToken = data.access_token
          localStorage.setItem('access_token', accessToken)
          this.$router.push({ name: 'Products' })
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  }
}
</script>
