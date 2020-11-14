<template>
  <div class="modal fade" :id="'modalEditCategory' + category.id" tabindex="-1" aria-labelledby="modalEditProduct" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Category</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form @submit.prevent="EditCategory">
            <div class="form-group">
              <label for="exampleInputEmail1">Category Name</label>
              <input type="text" v-model="editCategoryname" class="form-control" id="editCategoryname" aria-describedby="emailHelp">
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-light" id="buttonModal">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditCategory',
  data () {
    return {
      editCategoryname: ''
    }
  },
  props: ['category'],
  methods: {
    EditCategory () {
      const payload = {
        id: this.category.id,
        name: this.editCategoryname
      }
      this.$store.dispatch('EditCategory', payload)
    }
  },
  created () {
    this.editCategoryname = this.category.name
  }
}
</script>

<style>

</style>
