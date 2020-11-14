<template>
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col-5">

        <header class="mb-5">
          <img class="mb-5" id="login-gif" src="https://deo-ecommerce-bucket.s3-ap-southeast-1.amazonaws.com/38459-hello.gif" alt="Login">
          <h1>Admin Login</h1>
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
  components: {
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
          this.$store.dispatch('successToast', 'Login Successful')
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          // console.log(err.response)
          this.$store.dispatch('errToast', err.response.data.message)
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

#login-gif{
  width:200px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius:50%;
}

</style>
