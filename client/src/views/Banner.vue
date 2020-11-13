<template>
  <div class="container">
      <Navbar></Navbar>
      <ReadBanner></ReadBanner>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ReadBanner from '@/components/ReadBanner.vue'
export default {
  name: 'Banner',
  data () {
    return {
      pageName: 'readBanner'
    }
  },
  components: { Navbar, ReadBanner }
}
</script>

<style>

</style>
