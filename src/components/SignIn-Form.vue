<template>
  <div class="container mt-5">
    <p id="welcome">WELCOME TO TOKOLICIOUS</p>
    <div class="row mt-3">
      <div class="col-8">
        <img id="login-img" src="../../images/login-img.svg">
      </div>
      <div class="col-3">
        <div>
          <h3>Sign in to continue</h3>
        </div>
        <div>
          <form @submit.prevent="signin">
            <div class="form-group">
              <label>
                Email
              </label>
              <input v-model="userData.email" type="email" class="form-control" placeholder="halo@example.com">
            </div>
            <div class="form-group">
              <label>
                Password
              </label>
              <input v-model="userData.password" type="password" class="form-control" placeholder="password">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance.js'
export default {
  name: 'SignIn_Page',
  data () {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      axios({
        url: '/users/signIn',
        method: 'POST',
        data: {
          email: this.userData.email,
          password: this.userData.password
        }
      })
        .then(result => {
          console.log(result.data.access_token)
          localStorage.setItem('token', result.data.access_token)
          this.$router.push('Home')
          this.$swal('Welcome!!! \n You are logged in')
        })
        .catch(err => {
          this.$swal('Hey! Your ' + err.response.data)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-img {
  width: 80%;
}
#welcome {
  font-size: 50px;
  font-style: oblique;
}

*{
  margin-top: 25px;
}
</style>
