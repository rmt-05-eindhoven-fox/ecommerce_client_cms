<template>
  <div id="app">
    <div id="nav" class="bg-warning">
      <router-link v-if="$store.state.isLogin || isLogin" to="/list"
      class="text-dark"><i class="fas fa-home"></i>Product List</router-link> 
      <button class="btn btn-danger ml-4" v-if="$store.state.isLogin || isLogin"
      @click="processLogout"><i class="fas fa-sign-out-alt"></i>Logout</button>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import router from './router';
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  computed: {
    alert () {
      return this.$store.state.alert
    }
  },
  watch: {
    alert () {
      if (this.alert.status === 'success') {
        this.showSuccessToastMessage(this.alert.message)
      } else if (this.alert.status === 'error') {
        this.showErrorToastMessage(this.alert.message)
      }
    }
  },
  methods: {
    showSuccessToastMessage (message) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        toast: true,
        title: message,
        showConfirmButton: false,
        timer: 2000
      })
    },
    showErrorToastMessage (message) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        toast: true,
        title: message,
        showConfirmButton: false,
        timer: 3000
      })
    },
    processLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.$store.commit('setAlert', {
        status: 'success',
        message: 'Goodbye! See you next time!'
      })
      router.push({ name: 'Login' });
    },
  },
};
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Roboto', sans-serif;
  /* font-family: 'Sora', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
