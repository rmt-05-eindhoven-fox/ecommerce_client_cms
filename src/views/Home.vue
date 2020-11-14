<template>
  <div class="home d-flex">
      <Sidebar/>
      <router-view></router-view>
      <Error/>
  </div>
</template>

<script>
// @ is an alias to /src
import Error from '../components/Error'
import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar, Error
  },
  computed: mapState(['error', 'errorMessage'])
}
</script>

<style>
</style>
