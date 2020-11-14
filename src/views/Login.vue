<template>
  <section class="container mt-5" id="login-page">
    <div>
      <h1 class="text-center">
        ecommerce-cms
      </h1>
    </div>
    <div class="row">
      <div class="col-8">
        <div class="p-5">
          <img src="@/assets/login.svg" alt="login" class="img-fluid">
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h3>Login</h3>
            </div>
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email address</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password">
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <button @click="$router.push({ name: 'Landing' })" type="button" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (accesToken) {
      this.$router.push({ name: 'Products' })
    }
  }
}
</script>
