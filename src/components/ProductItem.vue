<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.name }}</td>
    <td><img :src="product.image_url" onerror="this.src='https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'" alt="image_not_found" width="auto" height="300"></td>
    <td>{{ product.Category.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <button @click.prevent="goToEditProduct(product.id)" type="button" class="btn btn-info">Edit</button> ||
      <button @click="deleteProduct(product.id)" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductItem',
  props: ['product', 'num'],
  methods: {
    goToEditProduct (id) {
      this.$router.push({ name: 'EditProduct', params: { id: id } })
    },
    deleteProduct (id) {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accessToken
      }
      Swal.fire({
        title: 'Delete',
        text: 'Are you sure want to delete this Task?',
        icon: 'warning',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return this.$store.dispatch('deleteProduct', payload)
          }
        })
        .then(({ data }) => {
          const accessToken = localStorage.getItem('access_token')
          this.$store.dispatch('fetchProducts', accessToken)
          Swal.fire('Product deleted succesfully!', '', 'success')
        })
        .catch(({ response }) => {
          const err = response.data.msg
          Swal.fire('Error', err, 'error')
        })
    }
  }
}
</script>

<style>

</style>
