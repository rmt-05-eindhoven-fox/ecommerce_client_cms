<template>
  <div class="container mt-4">
    <div class=button-add>
      <button @click.prevent="toAddBanner" class="btn btn-primary">Add Banner</button>
    </div>
    <div class="mt-3 table-responsive scroll">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr class="text-center">
            <th>No</th>
            <th>Banner Title</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(banner, index) in banners" :key="banner.id">
            <td>{{ index + 1 }}.</td>
            <td>{{ banner.title }}</td>
            <td><img :src="banner.image_url" width="200"/></td>
            <td>{{ banner.status }}</td>
            <td>
              <button class="btn btn-success" @click.prevent="showEditBanner(banner.id)"
              >Edit</button> ||
              <button class="btn btn-danger" @click.prevent="destroyBanner(banner.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadBanner',
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  data () {
    return {
      pageName: 'readBanner'
    }
  },
  created () {
    this.fetchBanner()
  },
  methods: {
    showEditBanner (id) {
      this.$router.push(`editBanner/${id}`)
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    toAddBanner () {
      this.$router.push('/addBanner')
    },
    destroyBanner (id) {
      this.$store.dispatch('destroyBanner', id)
    }
  }
}
</script>

<style>

</style>
