<template>
  <div id="addBanner">
    <NavbarDashboard/>
    <div class="container">
      <div class="row d-flex justify-content-center my-5">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">
              <h3>Add Banner</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addBanner">
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
  name: 'AddBanner',
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
    addBanner () {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        title: this.title,
        image_url: this.image_url,
        status: this.status,
        access_token: accessToken
      }
      this.$store.dispatch('addBanner', payload)
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
