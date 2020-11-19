<template>
  <section>
    <NavbarDashboard/>
    <div class="container m-5 justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center my-3">Category List</h1>
              <div v-show="categories">
                <table class="table">
                  <thead >
                    <tr>
                      <th scope="col">Item-ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Category Item -->
                    <CategoryItem
                      v-for="category in categories"
                      :category="category"
                      :key="category.id"
                    />
                  </tbody>
                </table>
              </div>
              <!-- <div v-show="categories.length === 0" class="alert alert-info" role="alert">
                <h4>
                  Category still empty
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
import CategoryItem from '../components/CategoryItem'

export default {
  name: 'Categories',
  components: {
    NavbarDashboard,
    CategoryItem
  },
  methods: {
    fetchCategories () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchCategories', accessToken)
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    } else {
      this.fetchCategories()
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
