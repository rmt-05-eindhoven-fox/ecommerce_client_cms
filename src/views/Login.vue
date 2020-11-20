<template>
<div class="container-fluid">
  <div class="row bg-dark justify-content-center align-items-center" style="height: 100vh">
    <div class="col-md-3 bg-white p-4 border rounded shadow">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input v-model="email" type="text" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-block btn-primary">Login</button>
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
        .then(({ data }) => {
          console.log(data.access_token)
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    }
  }
}
</script>

<style>

</style>
