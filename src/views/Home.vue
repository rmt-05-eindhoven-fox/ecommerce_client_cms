<template>
  <div class="home d-flex">
      <Sidebar/>
      <router-view></router-view>
      <Error/>
      <Success/>
  </div>
</template>

<script>
// @ is an alias to /src
import Error from '../components/Error'
import Success from '../components/Success'
import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar, Error, Success
  },
  computed: mapState(['error', 'errorMessage', 'success', 'successMessage'])
}
</script>

<style>
</style>
