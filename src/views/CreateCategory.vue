<template>
  <div>
    <!-- NAVBAR DASHBOARD -->
    <NavbarDashboard/>
    <!-- NAVBAR DASHBOARD -->

    <!-- CREATE CATEGORY FORM -->
    <section id="create-category" class="container my-4">
      <div class="row">
        <div class="col-auto col-md-6 m-auto">
          <div class="card">
            <div class="card-body shadow">
              <h5 class="card-title text-center">CREATE CATEGORY</h5>
              <form @submit.prevent="createCategory()">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input v-model="category.name" type="text" id="name" class="form-control rounded-pill" placeholder="E.g. Ruang Keluarga" autofocus autocomplete="off">
                </div>
                <hr class="bg-light">
                <button class="btn btn-sm btn-warning btn-block mt-4 p-2 rounded-pill" type="submit">CREATE</button>
                <a @click.prevent="cancel()" class="btn btn-cancel btn-sm btn-danger btn-block mt-4 p-2 rounded-pill">CANCEL</a>
                <hr class="bg-light">
              </form>
            </div>
          </div>
        </div>
      </div>
    </section><br>
    <!-- CREATE CATEGORY FORM -->

    <!-- CATEGORIES -->
    <div class="container col-8 col-sm-6 col-md-3 mb-5 pb-5">
      <h5>Category List :</h5>
      <div v-for="category in categories" :key="category.id" class="hover alert alert-success alert-dismissible">
        <a href="#" @click.prevent="deleteCategory(category.id)" class="close btn">&times;</a>
        <strong>{{category.name}}</strong>
      </div>
    </div>
    <!-- CATEGORIES -->
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'

export default {
  name: 'CreateCategory',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      // Category
      category: {
        name: ''
      }
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    readCategories () {
      this.$store.dispatch('readCategories')
    },
    createCategory () {
      const payload = {
        name: this.category.name
      }
      this.$store.dispatch('createCategory', payload)
      this.category.name = ''
    },
    cancel () {
      this.$router.push({ name: 'Dashboard' })
    },
    deleteCategory (payload) {
      this.$store.dispatch('deleteCategory', payload)
    }
  },
  created () {
    this.readCategories()
  }
}
</script>

<style>

</style>
