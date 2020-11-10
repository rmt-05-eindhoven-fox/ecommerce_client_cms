<template>
  <div class="container">
    <h1>List of Products</h1>
    <button type="button" class="btn btn-light mb-3" data-toggle="modal" data-target="#modalAddProduct">Add Product</button>
    <div class="modal fade" id="modalAddProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><img src="https://s0.bukalapak.com/img/53971606541/large/data.png" alt=""></td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>12</td>
          <td>
            <button class="btn-sm btn-warning">Edit</button> |
            <button class="btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListofProducts'
}
</script>

<style>
h1{
  text-align: center;
  color: white;
}
img{
  width: 200px;
}
</style>
