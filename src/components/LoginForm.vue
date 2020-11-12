<template>
  <div id="login-form">
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="user.email"
          type="text"
          class="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="product-category">Password</label>
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>
      <button type="submit" class="login-btn btn btn-light">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style scoped>
  #login-form {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
    padding-top: 300px;
  }

  .login-form{
    background-color: #e1b12c;
    width: 500px;
    padding: 30px;
    border-radius: 0.3em;
    color: #fff;
  }

  .login-btn {
    align-items: center;
  }
</style>
