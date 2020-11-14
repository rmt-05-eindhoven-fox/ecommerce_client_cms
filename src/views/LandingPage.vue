<template>
  <div>
      <div
        class="container d-flex justify-content-center">
        <form  @submit.prevent="login" class="mt-5">
          <h1>Login</h1>
          <h6 v-if="errMsg.length > 0" class="card bg-light p-2" style="color: red;">{{ errMsg }}</h6>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="d-flex justify-content-center m-3">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div  class="container d-flex justify-content-center">
        <!-- <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button> -->
      </div>
    </div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'LandingPage',
  data: function () {
    return {
      email: '',
      password: '',
      clientId: '247567052940-achnlp6p8btmuka5u98n1thu5gsd9ds7.apps.googleusercontent.com',
      errMsg: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.email = ''
          this.password = ''
          this.errMsg = ''
          this.$emit('login')
        })
        .catch((error) => {
          this.errMsg = error.response.data.msg
        })
    },
    OnGoogleAuthSuccess (idToken) {
      // console.log("idToken", idToken)
      // Receive the idToken and make your magic with the backend
      this.$emit('login', idToken)
    },
    OnGoogleAuthFail (error) {
      console.log('error', error)
    }
  }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: #194b52;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
