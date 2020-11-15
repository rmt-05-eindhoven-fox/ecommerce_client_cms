<template>
  <div class="login">
    <form @submit.prevent="login" id="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="email"
                type="email"
                id="login-email"
                class="form-control"
                autocomplete="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                id="login-password"
                class="form-control"
                autocomplete="current-password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Login</button
            ><br /><br />
          </form>
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
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Home' })
          this.$store.commit('setStatus', true)
          this.$swal(
            'Login Success!',
            'Welcome, Admin',
            'success'
          )
        })
        .catch(err => {
          this.$swal(
            'Error',
            `${err.response.status} ${err.response.data.error.split(',')}`,
            'error' // success,error,warning
          )
        })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
