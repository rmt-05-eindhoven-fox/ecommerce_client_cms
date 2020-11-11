<template>
  <div>
    <!-- NAVBAR DASHBOARD -->
    <NavbarDashboard/>
    <!-- NAVBAR DASHBOARD -->

    <!-- CREATE CATEGORY FORM -->
    <section id="create-category" class="container mt-5 pt-5">
      <div class="row">
        <div class="col m-auto">
          <div class="card">
            <div class="card-body shadow">
              <h5 class="card-title text-center">CREATE CATEGORY</h5>
              <form @submit.prevent="createCategory()">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input v-model="category.name" type="text" id="name" class="form-control rounded-pill" placeholder="E.g. Ruang Keluarga" required autofocus autocomplete="off">
                </div>
                <hr class="bg-light">
                <button class="btn btn-lg btn-primary btn-block mt-4 p-2 rounded-pill" type="submit">CREATE</button>
                <a @click.prevent="cancel()" class="btn btn-lg btn-danger btn-block mt-4 p-2 rounded-pill">CANCEL</a>
                <hr class="bg-light">
              </form>
            </div>
          </div>
        </div>
      </div>
    </section><br>
    <!-- CREATE CATEGORY FORM -->

    <!-- CATEGORIES -->
    <div class="container mb-5 pb-5">
      <h5>Category List :</h5>
      <div v-for="category in categories" :key="category.id" class="alert alert-success alert-dismissible">
        <a href="#" @click.prevent="deleteCategory(category.id)" class="close btn btn-danger">&times;</a>
        <strong>{{category.name}}</strong>
      </div>
    </div>
    <!-- CATEGORIES -->
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import axios from '../config/axios'

export default {
  name: 'CreateCategory',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      // Categories
      categories: [],

      // Category
      category: {
        name: ''
      }
    }
  },
  methods: {
    readCategories () {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: accessToken
        }
      }).then((result) => {
        this.categories = []
        this.categories = result.data
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    },
    createCategory () {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/categories',
        headers: {
          access_token: accessToken
        },
        data: {
          name: this.category.name
        }
      }).then((result) => {
        this.$router.push({ name: 'CreateCategory' })
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    },
    cancel () {
      this.$router.push({ name: 'Dashboard' })
    },
    deleteCategory (id) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/categories/${+id}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      }).then((result) => {
        this.$router.push({ name: 'CreateCategory' })
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    }
  },
  created () {
    this.readCategories()
  }
}
</script>

<style>

</style>
