<template>
  <div>
    <div id="nav">
      <div>E-commerce CMS</div>
      <router-link to="/">Home</router-link>
    </div>

    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title text-purple">Add Product</h4>
          <button id="close-add" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <form @submit.prevent='addProduct'>
              <div class="form-group ">
                  <label>
                      Name
                  </label>
                  <input
                      v-model="name"
                      class="form-control text-purple"
                      type="text"
                  >
              </div>

              <div class="form-group">
                  <label>
                    Image URL
                  </label>
                  <input
                    v-model="image_url"
                    class="form-control text-purple"
                    type="text"
                  >
              </div>

              <div class="form-group">
                  <label>
                    Price
                  </label>
                  <input
                    v-model="price"
                    class="form-control text-purple"
                    type="number"
                  >
              </div>

              <div class="form-group">
                  <label>
                    Stock
                  </label>
                  <input
                    v-model="stock"
                    class="form-control text-purple"
                    type="number"
                  >
              </div>

              <button type="submit" class="btn btn-purple btn-block">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'
export default {
  name: 'AddProduct',
  components: {
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      axios({
        url: '/products',
        method: 'POST',
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        },
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MDQ5ODM2OTV9.MglsVyEckK4Wd5F5Qkf8xdd70R6L6RW3AkV6kdbE77w'
        }
      })
        .then(({ data }) => {
          // this.fetchTasks()
          // $('#close-add').trigger('click')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style>

</style>
