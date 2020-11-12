<template>
  <div id="auth">
    <Loading :loading="loading"/>
    <div class="authentication">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <form @submit.prevent="login" class="card auth_form">
              <div class="header">
                <img class="logo" src="../assets/images/logo.png" alt="">
                <h5>Log in</h5>
              </div>
              <div v-if="messageInfo !== ''" class="alert alert-danger alert-dismissible fade show m-3">
                {{ messageInfo }}
                <!-- <button type="button" class="close m-t-15" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> -->
              </div>
              <div class="body">
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="zmdi zmdi-account-circle"></i></span>
                  </div>
                  <input v-model="email" type="email" class="form-control" placeholder="Email">
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="zmdi zmdi-lock"></i>
                    </span>
                  </div>
                  <input v-model="password" type="password" class="form-control" placeholder="Password">
                </div>
                <button class="btn btn-primary btn-block waves-effect waves-light">SIGN IN</button>
              </div>
            </form>
            <div class="copyright text-center">
              CMS Ecommerce &copy;
              {{ thisYear }}
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="card">
              <img src="../assets/images/bgecommerce.jpg" alt="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from '@/config/axios'
import Loading from '@/components/loading/Loading.vue'

export default {
  name: 'Auth',
  data () {
    return {
      thisYear: new Date().getFullYear(),
      loading: false,
      email: '',
      password: '',
      messageInfo: ''
    }
  },
  components: {
    Loading
  },

  created () {
    const logedinUser = this.$store.state.logedinUser || {}
    const keys = Object.keys(logedinUser)
    const haveToken = keys.filter(k => k === 'access_token')
    if (haveToken.length > 1) {
      this.$store.dispatch('clearUserInfo')
    }
  },

  methods: {

    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.loading = true
      axios({
        url: 'login',
        method: 'post',
        data: payload
      })
        .then(({ data }) => {
          this.messageInfo = ''
          if (data.user.role !== 'admin') {
            this.messageInfo = 'Access denied'
          }
          this.saveUserInfo(data)
          this.$router.push({ name: 'Home' })
        }).catch((err) => {
          this.messageInfo = err.response.data.message || 'Something Error'
          console.log(err.response)
        }).then(() => {
          this.loading = false
        })
    },

    saveUserInfo (data) {
      delete data.status
      this.$store.dispatch('saveUserInfo', data)
      localStorage.setItem('id', data.user.id)
      localStorage.setItem('fullname', data.user.fullname)
      localStorage.setItem('role', data.user.role)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('access_token', data.access_token)
    }
  }
}
</script>

<style>

</style>
