<template>
<div id="login">
 <div class="login-logo">
    <a href="index.html"><img src="assets/logo.png" alt=""/></a>
  </div>
  <h2 class="form-heading">login</h2>
  <div class="app-cam">
	  <form @submit.prevent="login">
		<input type="text" v-model="email" class="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}">
		<input type="password" v-model="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}">
		<div class="submit"><input type="submit" onclick="myFunction()" value="Login"></div>
 </form>
  </div>
   <div class="copy_layout login">
      <p>&copy; 2020 CMS.</p>
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
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        this.$router.push("/dashboard/products")
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
