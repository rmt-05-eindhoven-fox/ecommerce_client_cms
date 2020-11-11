<template>
  <div class="container">
    <div class="row justify-content-center">
      <form @submit.prevent="login" class="col-4 bg-warning p-2">
        <div class="col-12 mb-3 d-flex justify-content-center bg-light">
          <label for="email" class="p-2 bd-highlight">Email:</label>
          <input v-model="email" type="email" name="email" id="email" class="ml-auto p-2 bg-light">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-center bg-light">
          <label for="password" class="p-2 bd-highlight">Password:</label>
          <input v-model="password" type="password" name="password" id="password" class="ml-auto p-2 bg-light">
        </div>
        <input type="submit" class="btn btn-primary">
      </form>
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
      this.email = ''
      this.password = ''

      this.$store.dispatch('login', payload)
      this.goToProducts()
    },
    goToProducts () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>
