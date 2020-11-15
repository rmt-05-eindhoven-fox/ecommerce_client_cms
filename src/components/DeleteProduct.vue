<template>
  <div class="p-5 animated slideInDown">
    <h1> Are you sure want to delete Product "{{ name }}" ? </h1>
    <div class="d-flex mx-auto" style="min-height: 100%">
    <img src="../assets/undraw_order_confirmed_aaw7.svg"  alt="login-page" style="margin-left:500px; width:400px;height:400px;">
       </div>
    <button class="btn btn-info mr-4" @click="cancelDelete"> <i class="fas fa-window-close"></i> Whoops! No! Keep it!</button>
    <button class="btn btn-danger" @click="processDeleteProduct"><i class="fas fa-trash"></i>  Yes! Delete it! </button>
  </div>

</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      id: null,
      name: null,
    }
  },
  props: ['data'],
  methods: {
    processDeleteProduct() {
      const deletedDataId = this.id
      console.log(deletedDataId, 'deletedDataId')
      this.$store.dispatch('processDeleteProduct', deletedDataId)
    },
    cancelDelete() {
      this.$store.commit('BACK_HOME')
    },
  },
  created() {
    // const detail = this.$store.state.
    const data = this.$store.state.selectedProduct
    this.id = data.id
    this.name = data.name
    console.log('masuk di product detail')
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>