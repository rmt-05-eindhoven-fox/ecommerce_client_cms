<template>
  <div class="home">
    <div class="login-form">
      <form @submit.prevent="login">
      <h2 class="text-center">Sign In</h2>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-user"></i></span>
          <input v-model="email" type="text" class="form-control" placeholder="Username" required="required">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input v-model="password" type="password" class="form-control" placeholder="Password" required="required">
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
.login-form {
width: 340px;
margin: 50px auto;
}
.login-form form {
margin-bottom: 15px;
background: #f7f7f7;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
padding: 30px;
}
.login-form h2 {
margin: 0 0 15px;
}
.form-control, .btn {
min-height: 38px;
border-radius: 2px;
}
.input-group-addon .fa {
font-size: 18px;
}
.btn {
font-size: 15px;
font-weight: bold;
}
</style>
