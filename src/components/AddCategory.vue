<template>
  <div class="modal fade" id="modalAddCategory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form @submit.prevent="AddCategory">
            <div class="form-group">
              <label for="exampleInputEmail1">Category Name</label>
              <input type="text" v-model="inputCategoryName" class="form-control" id="inputCategoryName" aria-describedby="emailHelp">
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-light" id="buttonModal">Add Category</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      inputCategoryName: ''
    }
  },
  methods: {
    AddCategory () {
      const payload = {
        name: this.inputCategoryName
      }
      this.$store.dispatch('AddCategory', payload)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
