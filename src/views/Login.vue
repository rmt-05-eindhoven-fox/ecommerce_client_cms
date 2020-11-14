<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="h-50 w-25 bg-info shadow rounded p-2">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <input type="password" name="" id="" v-model="password" class="form-control" required>
        </div>
        <input type="submit" value="Login" class="form-group btn btn-primary">
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
