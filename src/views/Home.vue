<template>
  <div class="home">
    <div id="nav">
      <div>E-commerce CMS</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/addProduct">Add</router-link> |
      <router-link to="/login">Logout</router-link>
    </div>
    <Dashboard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    Dashboard
  },
  data () {
    return {
    }
  }
}
</script>
