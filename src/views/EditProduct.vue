<template>

  <div class="container" style="position: relative; overflow:hidden">
    <div id="nav">
      <div class="text-small">E-commerce CMS</div>
        <a class="text-decoration-none text-grey text-small" @click.prevent="changePage(``)" href=""> Home</a>
    </div>

    <img class="img-left" src="../assets/surr-681.png">
    <img  class="img-right" src="../assets/surr-675.png">

    <div class="row justify-content-center">
      <div>
        <div>
          <form class="p-3 border shadow" @submit.prevent='editProduct' style="width: 25vw; background-color: white">
              <div>
                <h4 class="text-brown py-1" style="color: #f66483">Edit Product</h4>
              </div>
              <div class="form-group ">
                  <label class="text-small">
                      Name
                  </label>
                  <input
                      v-model="name"
                      class="form-control text-pink text-center"
                      type="text"
                  >
              </div>

              <div class="form-group">
                  <label class="text-small">
                    Image URL
                  </label>
                  <input
                    v-model="image_url"
                    class="form-control text-pink text-center"
                    type="text"
                  >
              </div>

              <div class="form-group">
                  <label class="text-small">
                    Price
                  </label>
                  <input
                    v-model="price"
                    class="form-control text-pink text-center"
                    type="number"
                  >
              </div>

              <div class="form-group">
                  <label class="text-small">
                    Stock
                  </label>
                  <input
                    v-model="stock"
                    class="form-control text-pink text-center"
                    type="number"
                  >
              </div>

              <button type="submit" class="btn-brown btn-block">Edit</button>
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
        .then(({ data }) => {
          this.$router.push('/')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product has been updated',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response.data.msg
          })
        })
    },
    changePage (path) {
      this.$store.dispatch('changePage', path)
    }
  },
  created () {
    this.fetchProductId()
  }
}
</script>

<style scoped>
  .border {
    outline: 10px solid #f66483 !important;
    outline-offset: -10px;
  }

  .img-left {
    height: 450px; position: absolute; z-index: 999; left: -70px; top: 60px;
    transition: all .5s;
  }
  .img-left:hover {
    left: 30px
    /* background-color: aqua; */
  }

  .img-right {
    height: 420px; position: absolute; z-index: 999; right: -30px; top: 80px;
    transition: all .5s;
  }
  .img-right:hover {
    right: 70px
    /* background-color: aqua; */
  }
</style>
