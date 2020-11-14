<template>
  <div class="container">
    <h1>List of Banners</h1>
    <button type="button" class="btn btn-light mb-3" data-toggle="modal" data-target="#modalAddBanner">Add Banner</button>
    <AddBanner/>
    <table class="table table-dark text-align-center">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <EachBanner v-for="(banner, i) in banners"
        :key="banner.id"
        :no="i"
        :banner="banner"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddBanner from '../components/AddBanner.vue'
import EachBanner from '../components/EachBanner.vue'
export default {
  name: 'ListofBanner',
  components: {
    AddBanner,
    EachBanner
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
