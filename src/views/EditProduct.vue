<template>
  <div>
    <div id="nav">
      <div>E-commerce CMS</div>
      <router-link to="/">Home</router-link>
    </div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title text-purple">Edit Product</h4>
          <button id="close-add" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="editProduct">
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

              <button type="submit" class="btn btn-purple btn-block">Edit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
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
  computed: {
  },
  methods: {
    fetchProductId () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductId', id)
        .then(({ data }) => {
          // console.log(data)
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
        })
        .catch(err => {
          if (+err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          } else {
            console.log(err.response.data)
          }
        })
    },
    editProduct () {
      const id = this.$route.params.id
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        id: id
      }
      this.$store.dispatch('editProduct', payload)
    }
  },
  created () {
    this.fetchProductId()
  }
}
</script>

<style>

</style>
