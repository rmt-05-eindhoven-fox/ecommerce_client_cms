<template>
  <tr>
    <th scope="row">{{ category.id }}</th>
    <td>{{ category.name }}</td>
    <td>
      <button @click.prevent="goToEditCategory(category.id)" type="button" class="btn btn-info">Edit</button> ||
      <button @click="deleteCategory(category.id)" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CategoryItem',
  props: ['category'],
  methods: {
    goToEditCategory (id) {
      this.$router.push({ name: 'EditCategory', params: { id: id } })
    },
    deleteCategory (id) {
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
            return this.$store.dispatch('deleteCategory', payload)
          }
        })
        .then(({ data }) => {
          const accessToken = localStorage.getItem('access_token')
          this.$store.dispatch('fetchCategories', accessToken)
          Swal.fire('Category deleted succesfully!', '', 'success')
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
