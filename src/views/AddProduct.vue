<template>
  <div class="container" style="position: relative; overflow:hidden">
    <div id="nav">
      <div class="text-small">E-commerce CMS</div>
        <a class="text-decoration-none text-grey text-small" @click.prevent="changePage(``)" href=""> Home</a>
    </div>

    <img class="img-left" src="../assets/surr-287.png" >
    <img class="img-right" src="../assets/fatal-error-4.png">

    <div class="row justify-content-center ">
      <div>
        <div>
          <form class="p-3 border shadow " @submit.prevent='addProduct' style="width: 25vw; background-color: white">
              <div>
                <h4 class="text-brown py-1" style="color: #f66483">Add Product</h4>
              </div>
              <div class="form-group">
                  <label class="text-small">
                      Name
                  </label>
                  <input
                      v-model="name"
                      class="form-control text-pink text-center"
                      type="text"
                      maxlength="20"
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
                    maxlength="10"
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
                    maxlength="4"
                  >
              </div>

              <button type="submit" class="btn-brown btn-block ">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push('/')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product has been added',
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
  }
}
</script>

<style scoped>
  .border {
    outline: 10px solid #f66483 !important;
    outline-offset: -10px;
  }

  .img-left {
    height: 80vh; position: absolute; z-index: -1; left: -70px; top: 60px;
    transition: all .5s;
  }
  .img-left:hover {
    left: 30px
    /* background-color: aqua; */
  }

  .img-right {
    height: 400px; position: absolute; z-index: -1; right: -30px; top: 90px;
    transition: all .5s;
  }
  .img-right:hover {
    right: 70px
    /* background-color: aqua; */
  }
</style>
