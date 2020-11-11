<template>
  <div class="home">
    <div id="nav">
      <div>E-commerce CMS</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/addProduct">Add</router-link> |
      <a @click.prevent="logout" href="">Logout</a>
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
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
