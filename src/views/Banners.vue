<template>
  <section>
    <NavbarDashboard/>
    <div class="container-fluid m-5">
      <div class="row d-flex align-items-center">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center my-3">Banner List</h1>
              <div v-show="banners">
                <table class="table">
                  <thead >
                    <tr>
                      <th scope="col">Item-ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Banner Item -->
                    <BannerItem
                      v-for="banner in banners"
                      :banner="banner"
                      :key="banner.id"
                    />
                  </tbody>
                </table>
              </div>
              <!-- <div v-show="banners.length === 0" class="alert alert-info" role="alert">
                <h4>
                  Banner still empty
                </h4>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import BannerItem from '../components/BannerItem'

export default {
  name: 'Banners',
  components: {
    NavbarDashboard,
    BannerItem
  },
  methods: {
    fetchBanners () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchBanners', accessToken)
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    } else {
      this.fetchBanners()
    }
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
