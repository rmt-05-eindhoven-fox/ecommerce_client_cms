<template>
  <tbody>
    <tr>
      <td>{{ product.name }}</td>
      <td>
        <img :src="product.image_url" alt="" style="width: 100px;">
      </td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td>
        <button
        class="btn btn-primary"
        style="margin-right: 10px;"
        @click="edit"
        >Edit</button>
        <button
        class="btn btn-danger"
        @click.prevent="deleteP">Delete</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'DataProduct',
  props: ['product'],
  methods: {
    edit () {
      this.$router.push({ name: 'EditProduct', params: { id: this.product.id } })
    },

    deleteP () {
      Swal.fire({
        title: 'Do you want to delete the changes?',
        showDenyButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: 'Dont Delete'
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Delete!', '', 'success')
            const payload = {
              id: this.product.id
            }
            this.$store.dispatch('deletep', payload)
              .then(({ data }) => {
                this.$store.dispatch('fetchProduct')
              })
              .catch(err => console.log(err))
          } else if (result.isDenied) {
            Swal.fire('Changes are not delete', '', 'info')
          }
        })
    }
  }
}
</script>

<style>

</style>
