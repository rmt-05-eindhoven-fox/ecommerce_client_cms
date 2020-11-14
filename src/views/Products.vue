<template>
<div role="tabpanel" class="tab-pane fade in active" id="products" aria-labelledby="home-tab">
  <button type="button" class="btn btn-sm btn-success warning_1" data-toggle="modal" data-target="#addModal">Add</button>
    <AddModal></AddModal>
    <div class="bs-example4" data-example-id="contextual-table">
    <table class="table">
    <thead>
    <tr>
        <th>No</th>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <!-- <tr class="orange">
        <th scope="row">1</th>
        <td>Sandal Jepit</td>
        <td><img src="https://cf.shopee.co.id/file/b5f3e90d6c32576e94f1270c7b0162e1" style="width: 64px; height: 64px;"></td>
        <td>Rp 100.000,-</td>
        <td>50</td>
        <td>
        <button type="button" class="btn btn-sm btn-success warning_3" data-toggle="modal" data-target="#myModal">
            <i class="fa fa-pencil-square-o"></i>
        </button>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
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
        </div>
        <button href="" class="btn btn-sm btn-success warning_3"><i class="fa fa-trash"></i></button>
        </td>
    </tr> -->
    <ListProducts
          v-for="(product, i) in products"
          :key="product.id"
          :i="i"
          :product="product"
    ></ListProducts>
    </tbody>
    </table>
  </div>
  <center>
      <nav>
      <ul class="pagination">
          <li class="disabled"><a href="#" aria-label="Previous" style="color: black;"><span aria-hidden="true">«</span></a></li>
          <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
          <li><a href="#" style="color: black;">2</a></li>
          <li><a href="#" style="color: black;">3</a></li>
          <li><a href="#" aria-label="Next"><span aria-hidden="true" style="color: black;">»</span></a></li>
          </ul>
      </nav>
  </center>
</div>
</template>

<script>
import ListProducts from '../components/ListProducts.vue'
import AddModal from '../components/AddModal'
export default {
  name: 'Products',
  components: {
    ListProducts,
    AddModal
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>