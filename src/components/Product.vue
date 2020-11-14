<template>
    <tr>
      <th class="text-center align-middle" scope="row">{{ number }}</th>
      <td><img class="img-thumbnail img-fluid rounded mx-auto d-block" style="max-width: 250px" :src="product.image_url" :alt="product.name"></td>
      <td class="text-center align-middle">{{ product.name }}</td>
      <td class="text-center align-middle">Rp. {{ product.price }}</td>
      <td class="text-center align-middle">{{ product.stock }}</td>
      <td class="text-center text-capitalize align-middle">{{ getCategoryById(product.CategoryId).name }}</td>
      <td class="text-center align-middle">
        <button
          @click.prevent="editProduct(product.id)"
          class="btn btn-info mx-2"><i class="far fa-edit"></i></button>
        <button
          @click.prevent="deleteProduct(product.id)"
          class="btn btn-danger mx-2"><i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'number'],
  methods: {
    getCategoryById (id) {
      return this.$store.getters.getCategoryById(id)
    },
    editProduct (id) {
      this.$router.push(`/home/products/edit/${id}`)
    },
    deleteProduct (id) {
      this.$vToastify.prompt({
        body: 'Are you sure you want to delete this product?',
        answers: { Yes: true, No: false }
      })
        .then((val) => {
          if (val) {
            return this.$store.dispatch('deleteProduct', id)
          } else {
            throw new Error('Cancel delete')
          }
        })
        .then(({ data }) => {
          this.$vToastify.success(data.message)
          this.$store.commit('filterDeleteProduct', id)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>

<style>

</style>
