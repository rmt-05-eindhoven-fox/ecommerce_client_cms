<template>
  <div id="addCategory">
    <NavbarDashboard/>
    <div class="container">
      <div class="row d-flex justify-content-center my-5">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">
              <h3>Add Category</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addCategory">
                <div class="form-group">
                  <label for="add-name">Name</label>
                  <input v-model="name" placeholder="category name" type="text" class="form-control" id="add-name">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button @click="$router.push({ name: 'Categories' })" type="button" class="btn btn-danger">Cancel</button>
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
  name: 'AddCategory',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addCategory () {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        name: this.name,
        access_token: accessToken
      }
      this.$store.dispatch('addCategory', payload)
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
