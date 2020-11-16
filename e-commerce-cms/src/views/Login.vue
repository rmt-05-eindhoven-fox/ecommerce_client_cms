<template>
  <div class="login">
    <div class="container mt-5">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-header text-center">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <input name="email" id="email" class="form-control" type="email" placeholder="Email" v-model="email"/>
              </div>

              <div class="form-group">
                <input name="password" id="password" class="form-control" type="password" placeholder="Password" v-model="password"/>
              </div>

              <div class="form-group">
                <button class="btn btn-primary btn-block">Login</button>
              </div>
            </form>
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
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$loading(true)
      const payload = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('Dashboard')
          this.$loading(false)
        })
        .catch(err => {
          this.$loading(false)
          console.log(err)
        })
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$router.push('Dashboard')
    }
  }
}
</script>

<style>

</style>
