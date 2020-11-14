<template>
  <div id="editBanner">
    <NavbarDashboard/>
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">
              <h3>Edit Banner</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="editBanner">
                <div class="form-group">
                  <label for="add-title">Name</label>
                  <input v-model="title" placeholder="banner name" type="text" class="form-control" id="add-title">
                </div><hr>
                <div class="form-group" width="auto" height="150">
                  <img :src="image_url" onerror="this.src='https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'" alt="image_not_found" width="auto" height="150">
                </div> <hr>
                <div class="form-group">
                  <label for="add-image_url">Image URL</label>
                  <input v-model="image_url" placeholder="image url" type="url" class="form-control" id="add-image_url">
                </div>
                <div class="form-group">
                  <label for="add-status" class="col-form-label">Status</label>
                  <select v-model="status" placeholder="..." class="custom-select" id="add-status">
                    <option value="active">Active</option>
                    <option value="unactive">Unctive</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button @click="$router.push({ name: 'Banners' })" type="button" class="btn btn-danger">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'

export default {
  name: 'EditBanner',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      title: '',
      image_url: '',
      status: ''
    }
  },
  methods: {
    getBannerById () {
      const id = this.$route.params.id
      const accesToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accesToken
      }
      this.$store.dispatch('getBannerById', payload)
        .then(({ data }) => {
          this.title = data.title
          this.image_url = data.image_url
          this.status = data.status
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    editBanner () {
      const id = this.$route.params.id
      const accesToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accesToken,
        title: this.title,
        image_url: this.image_url,
        status: this.status
      }
      this.$store.dispatch('editBanner', payload)
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    } else {
      this.getBannerById()
    }
  }
}
</script>

<style>

</style>
