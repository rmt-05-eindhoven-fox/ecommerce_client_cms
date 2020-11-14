<template>
  <div>
    <NavBar @logout="logout"/>
    <div v-if="errorMessage.length">
      <h5 class="card bg-warning">{{ errorMessage }}</h5>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'MainPage',
  components: {
    NavBar
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$emit('logout')
    }
  },
  computed: {
    errorMessage () {
      return this.$store.state.errorMessage
    }
  }
}
</script>

<style>

</style>
