<template>
  <tr>
    <th scope="row">{{ no+1 }}</th>
    <td scope="row">{{ category.name }}</td>
    <td scope="row">
      <button class="btn-sm btn-warning" data-toggle="modal" :data-target="'#modalEditCategory' + category.id">Edit</button> |
      <EditCategory :category="category"/>
      <button class="btn-sm btn-danger" @click.prevent="deleteCategory">Delete</button>
    </td>
  </tr>
</template>

<script>
import EditCategory from '../components/EditCategory'
export default {
  name: 'EachCategory',
  props: ['category', 'no'],
  components: {
    EditCategory
  },
  methods: {
    deleteCategory () {
      const id = this.category.id
      this.$store.dispatch('deleteCategory', id)
    }
  }
}
</script>

<style>

</style>
