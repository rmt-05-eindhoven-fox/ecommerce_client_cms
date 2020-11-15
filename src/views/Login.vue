<template>
  <div>
  
    <h1> ChocoChenka</h1>
    <div class="d-flex mx-auto animated slideInDown" style="min-height: 100%">
    <img src="../assets/store.gif"  alt="login-page" style="margin-left:600px; width:400px;height:400px;">
       </div>
    <form @submit.prevent="processLogin" >
      <div class="container animated slideInDown" style="width: 30%">
      <p class="text-danger"> {{this.$store.state.errMsg}}</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="far fa-envelope"></i> Email address</span>
          </div>
          <input v-model="email" type="text" class="form-control" placeholder="Your email"
          aria-label="Email" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i>  Password </span>
          </div>
          <input v-model="password" type="password" class="form-control" placeholder="Your password"
          aria-label="Password" aria-describedby="basic-addon1">
        </div>
        <button type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i> Login </button>
      </div>
      
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    processLogin() {
      const loginData = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('processLogin', loginData);
    },
  },
}
</script>

<style>
  h1{
    font-family: 'Lobster', cursive;
    font-size: 40pt;
  }
</style>