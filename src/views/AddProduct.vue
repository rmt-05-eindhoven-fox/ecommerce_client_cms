<template>
  <div>
    <h1 class="page-title">Add New Product</h1>

  </div>
</template>

<script>
export default {
  name: AddProduct,
  components: {
    FormAddProduct
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({name: 'Login'})
    }
  }
}
</script>