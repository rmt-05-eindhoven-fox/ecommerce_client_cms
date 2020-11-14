<template>
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col-5">

        <header class="mb-5">
          <h1>Login Page</h1>
        </header>
        <form>
            <div class="form-group">
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button
              @click.prevent="userLogin"
              type="submit"
              class="btn mb-3 btn-primary w-100"
            >Submit</button>
            <button
              @click.prevent="goToHome"
              type="submit"
              class="btn btn-primary w-100"
            >Go To Home</button>
        </form>

    </div>
    <div class="col"></div>
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
    goToHome () {
      this.$router.push({ name: 'Home' })
    },
    userLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userLogin', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }

}
</script>

<style>
header {
  margin:20px;
}

.login-container{
  border : 1px solid;
  min-height : 300px;
  border-radius: 8px;
  padding : 30px;

  display : flex;
  flex-direction: column;
  justify-content: center;

}

</style>
