<template>
  <tr>
    <th scope="row">{{ num + 1 }}</th>
    <td>{{ product.name }}</td>
    <td><img :src="product.image_url" alt="Product" width="auto" height="300"></td>
    <td>{{ product.category }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <button @click.prevent="goToEditProduct(product.id)" type="button" class="btn btn-info">Edit</button> ||
      <button @click="deleteProduct(product.id)" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
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
      this.$store.dispatch('deleteProduct', payload)
        .then(({ data }) => {
          const accessToken = localStorage.getItem('access_token')
          this.$store.dispatch('fetchProducts', accessToken)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  }
}
</script>

<style>

</style>
