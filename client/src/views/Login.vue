<template>
  <div>
    <div class="container my-3">
      <div class="row">
        <div class="col-12 p-0 text-center">
          <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" style="height:40%;" />
          <h5 class="font-weight-light mb-3">You shall not pass, please verify your identity</h5>
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="exampleInputEmail1" class="text-left">Email address</label>
                  <input v-model="loginEmail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <input v-model="loginPassword" type="password" class="form-control" id="exampleInputPassword" aria-describedby="emailHelp"
                    placeholder="Enter password" />
                </div>

                <button type="submit" class="btn btn-primary btn-block">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.loginEmail, password: this.loginPassword })
    }
  }
}
</script>

<style>
.login-form {
  width: 340px;
  margin: 50px auto;
  font-size: 15px;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
</style>
