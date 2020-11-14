<template>
  <div class="home container mt-5">
    <h1>Admin Page</h1>
    <div class="row justify-content-center">
      <div class="col-4 p-5 mt-5 shadow">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login/>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
