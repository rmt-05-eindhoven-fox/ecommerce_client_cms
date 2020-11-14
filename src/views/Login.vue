<template>
  <div style="height: 100vh;">
    <img alt="bg image" src="../assets/bg.jpg" width="100%" style="position: absolute; z-index: -2;">
    <div class="container h-100 pt-5">
      <div class="d-flex justify-content-center h-100 pt-5">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
            <img src="../assets/Amaz-ing-logo.png" class="brand_logo" alt="Logo">
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form @submit.prevent="login">
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                </div>
              <input v-model="loginForm.email" type="text" class="form-control input_user" placeholder="email">
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
              <input v-model="loginForm.password" type="password" class="form-control input_pass" value="" placeholder="password">
              </div>
            <div class="d-flex justify-content-center mt-5 login_container">
              <button type="submit" name="button" class="btn login_btn">Login</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = this.loginForm
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('name', data.name)
          localStorage.setItem('email', data.email)
          localStorage.setItem('role', data.role)
          localStorage.setItem('avatar', data.avatar)
          this.$vToastify.success('Logged in successfully')
          this.$router.push('/home')
          this.$store.commit('setUserDetail', data)
        })
        .catch(({ response }) => {
          this.$vToastify.error(response.data.error, 'Sorry')
        })
    }
  }
}
</script>

<style scoped>
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #0F3546;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #F2EEE3;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #E1C2B0 !important;
  color: #0F3546 !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #E1C2B0 !important;
  color: #0F3546 !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
  background-color: #E1C2B0 !important;
}
</style>
