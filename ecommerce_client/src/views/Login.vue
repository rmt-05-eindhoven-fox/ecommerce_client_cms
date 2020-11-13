<template>
    <div class="container">
      <div class="row content">
        <div class="col-md-6 mb-3"></div>
        <div class="col-md-6 mb-3">
        <h1>Please login first!</h1>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" name="email" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password" class="form-control">
          </div>
          <button @click.prevent="login" class="btn btn-primary">Sign In</button>
        </form>
        </div>
      </div>
    </div>
</template>

<script>
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
