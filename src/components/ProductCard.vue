<template>
    <div class="row list-product">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <img
              class="mb-2"
              src="https://guitar.com/wp-content/uploads/2018/10/Gibson-les-paul-modern-hero@1400x1050.jpg"
              alt=""
            />
            <h5>Gibson Les Paul</h5>
            <p>Stock: 10</p>
            <p>price: Rp. 1.000.000</p>
            <button class="btn btn-success">Update</button>
            <button class="btn btn-danger ml-2">Delete</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style>
</style>
