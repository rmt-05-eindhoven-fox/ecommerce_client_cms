<template>
  <div>
    <div class="container m-5">
      <div class="row">
        <div class="card-body">
          <div id="title-Ecommerce">
            <h3>Login form Ecommerce App</h3> <br><br>
          </div>
          <form id="login-form" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="user.email"
                type="text"
                name="email"
                id="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="user.password"
                type="password"
                name="password"
                id="password"
                class="form-control"
                aria-describedby="passwordHelp"
              />
            </div>
            <div class="form-remember">
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                checked
              />
              <label for="remember_me">Keep me logged in</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
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
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      }
      console.log(payload, '<<< payload login')
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>
</style>
