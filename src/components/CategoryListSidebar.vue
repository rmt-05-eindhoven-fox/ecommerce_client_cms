<template>
  <md-list-item>
    <md-button
    class="md-list-item-text category-list"
    :class="{'selected-category' : isThisCategory}"
    @click="changePage"
    >{{ category.name }}</md-button>
  </md-list-item>
</template>

<script>
export default {
  name: 'CategorySidebar',
  props: ['category'],
  computed: {
    isThisCategory () {
      if (this.$route.params.id === this.category.id) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    fetchProducts () {
      const payload = this.category.id
      this.$store.dispatch('fetchCategoryProducts', payload)
    },
    changePage () {
      this.fetchProducts()
      const payload = this.category.name
      this.$store.commit('changeCurrentCategory', payload)
      this.$router.push({ name: 'ProductCategories', params: { id: this.category.id } })
    }
  }
}
</script>

<style>

</style>
