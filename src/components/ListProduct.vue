<template>
  <table class="table responsive-table">
    <thead class="thead-light">
      <tr class="col">
        <th>#</th>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Action</th>
      </tr>
      <div>
        <b-alert variant="danger" show dismissible v-if="deleteMessage">
          {{deleteMessage}}
        </b-alert>
      </div>
    </thead>
    <tbody class="product-container">

      <tr v-for="(product, i) in products" :key="i">
        <th scope="row">{{ i+1}}</th>
        <td class="nameProduct">{{ product.name }}</td>
        <td class="image_url">
          <div class="card" style="width: 18rem">
            <img :src="`${product.image_url}`" class="card-img-top" alt="" />
          </div>
        </td>
        <td>Rp {{ product.price.toLocaleString() }}</td>
        <td>{{ product.stock }} pcs</td>
        <td>
          <button @click="editProduct(product)" class="btn btn-warning mr-3">
            Edit
          </button>
          <b-button class="btn btn-danger" @click="deleteProduct(product.id, product.name)"
            >Delete</b-button
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ListProduct',
  props: ['products'],
  data () {
    return {
      deleteMessage: ''
    }
  },
  methods: {
    editProduct (data) {
      this.$store.commit('EDITPAGE', data)
      this.$router.push({ name: 'editPage', params: { id: data.id } })
    },
    deleteProduct (id, nameProduct) {
      Swal.fire({
        title: 'Are you sure?',
        text: `Delete ${nameProduct}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          return this.$store.dispatch('deleteProduct', id)
        }
      })
        .then(({ data }) => {
          this.deleteMessage = data.message
          this.$store.dispatch('fetchProduct')
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.nameProduct {
  text-align: center ;
}
.image_url {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
}
</style>
