<template>
  <div id="editCategory">
    <NavbarDashboard/>
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">
              <h3>Edit Category</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="editCategory">
                <div class="form-group">
                  <label for="edit-name">Name</label>
                  <input v-model="name" placeholder="category name" type="text" class="form-control" id="edit-name">
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
  name: 'EditCategory',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    getCategoryById () {
      const id = this.$route.params.id
      const accesToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accesToken
      }
      this.$store.dispatch('getCategoryById', payload)
        .then(({ data }) => {
          this.name = data.name
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    editCategory () {
      const id = this.$route.params.id
      const accesToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accesToken,
        name: this.name
      }
      this.$store.dispatch('editCategory', payload)
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    } else {
      this.getCategoryById()
    }
  }
}
</script>

<style>

</style>
