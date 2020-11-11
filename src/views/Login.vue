<template>
  <div>
    <div class="card shadow p-2 col-3 align-items-center" >
      <div class="card-body">
        <h4 class="text-center text-purple">E-commerce CMS</h4>
          <form @submit.prevent="login">
            <div class="form-group ">
              <label >
                  Email
              </label>
              <input
                  v-model="email"
                  class="form-control text-purple"
                  type="email"
              >
            </div>

            <div class="form-group">
              <label >
                  Password
              </label>
              <input
                v-model="password"
                class="form-control text-purple"
                type="password"
              >
            </div>

            <button type="submit" class="btn btn-purple btn-block">Login</button>
            <div class="text-center" style="font-size: 12px;">or</div>
          </form>
          <a>
            to E-commerce website
          </a>
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

<style>
</style>
