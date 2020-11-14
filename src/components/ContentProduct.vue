<template>
  <div class="card mt-2" col>
    <div class="card-body row">
      <div class="col-5">
        <img :src="product.image_url" alt="Product Image">
      </div>
      <div class="col-7">
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text">Price  : {{ product.price }}</p>
        <p class="card-text">Stock  : {{ product.stock }}</p>
        <button @click="editProduct" class="btn btn-primary">Edit</button>
        <button style="margin-left: 15px" @click="willDelete(product.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import swal from 'sweetalert'
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    editProduct () {
      const id = this.product.id
      this.$loading(true)
      setTimeout(() => {
        this.$loading(false)
        this.$router.push(`editProduct/${id}`)
      }, 500)
    },
    willDelete (id) {
      swal({
        title: 'Are you sure?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            swal({
              text: 'Successfully deleted',
              buttons: false,
              timer: 1000,
              icon: 'success'
            })
            this.deleteProduct(id)
          }
        })
    },
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
        .then(data => {
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.103);
}
img {
  max-height: 150px;
}
</style>
