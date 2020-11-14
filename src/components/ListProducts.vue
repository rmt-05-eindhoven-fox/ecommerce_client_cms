<template>
    <tr class="orange">
        <th scope="row">{{ i+1 }}</th>
        <td>{{ product.name }}</td>
        <td><img :src="product.image_url" alt="" style="width: 64px; height: 64px;"></td>
        <td>{{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>
        <button type="button" class="btn btn-sm btn-success warning_3" data-toggle="modal" :data-target="'#EditModal' + product.id">
            <i class="fa fa-pencil-square-o"></i>
        </button>
        <EditModal :product="product"></EditModal>
        <!-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 class="modal-title">Update Product</h2>
                </div>
                <div class="modal-body">
                <form>
                    <div class="form-group">
                    <label for="focusedinput"><h2>Name</h2></label>
                    <input type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
                    </div>
                    <div class="form-group">
                    <label for="focusedinput" ><h2>Price</h2></label>
                    <input type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
                    </div>
                    <div class="form-group">
                    <label for="focusedinput"><h2>Stock</h2></label>
                    <input type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
                    </div>
                    <div class="form-group">
                    <label for="exampleInputFile"><h2>Image</h2></label>
                    <input type="file" id="exampleInputFile">
                    </div>
                </form>
                <br>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div> -->
        <button href="" class="btn btn-sm btn-success warning_3" @click.prevent="deleteProduct"><i class="fa fa-trash"></i></button>
        </td>
    </tr>
</template>

<script>
import EditModal from './EditModal'
export default {
  name: 'ListProducts',
  data () {
    return {
      EditModal: {}
    }
  },
  props: ['product', 'i'],
  components: {
    EditModal
  },
  methods: {
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>

</style>