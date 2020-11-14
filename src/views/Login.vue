<template>
  <div class="bg-blue-500 h-screen items-center flex">
      <div class="m-auto w-1/3 h-auto bg-green-500 flex-col">
        <div>
            {{ logo }}
        </div>
        <form @submit.prevent="postLogin()" class="flex-col">
            <div>
            <input v-model="email" type="text" placeholder="Email"/>
            </div>
            <div>
            <input v-model="password" type="password" placeholder="Password"/>
            </div>
            <div>
            <button type="submit" class="bg-red-500">Submit</button>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    postLogin () {
      // axios({
      //   method: 'POST',
      //   url: this.SERVER + '/login',
      //   data: {
      //     email: this.email,
      //     password: this.password
      //   }
      // }).then((res) => {
      //   const { accessToken } = res.data
      //   localStorage.setItem('access_token', accessToken)
      this.$router.push({ name: 'Home' })
      //   this.email = ''
      //   this.password = ''
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  },
  computed: {
    logo () {
      return this.$store.state.test
    }
  }
}
</script>

<style>

</style>
