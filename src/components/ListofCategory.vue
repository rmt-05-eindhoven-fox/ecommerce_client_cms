<template>
  <div class="container">
    <h1>List of Category</h1>
    <button type="button" class="btn btn-light mb-3" data-toggle="modal" data-target="#modalAddCategory">Add Category</button>
    <AddCategory/>
    <table class="table table-dark text-align-center">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <EachCategory v-for="(category, i) in categories"
        :key="category.id"
        :no="i"
        :category="category"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddCategory from '../components/AddCategory.vue'
import EachCategory from '../components/EachCategory.vue'
export default {
  name: 'ListofCategory',
  components: {
    AddCategory,
    EachCategory
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
