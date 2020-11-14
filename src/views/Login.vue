<template>
  <div class="d-flex justify-content-center align-items-center bg-dark" style="height: 100vh;">
    <div class="h-50 w-25 bg-secondary shadow rounded p-2 d-flex flex-column" style="justify-content: space-around;">
      <div class="h4 text-light">Login as Admin</div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="text-white">Email</label>
          <input type="email" name="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password" class="text-white">Password</label>
          <input type="password" name="password" v-model="password" class="form-control" required>
        </div>
        <input type="submit" value="Login" class="form-group btn btn-success">
      </form>
    </div>
    <Error/>
  </div>
</template>

<script>
import Error from '../components/Error'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Error
  },
  computed: mapState(['error', 'errorMessage']),
  methods: {
    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
    }
  }
}
</script>

<style>

</style>
