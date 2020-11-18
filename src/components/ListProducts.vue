<template>
    <div class="list-products">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card" style="width: 18rem;">
                    <img :src="product.images_url" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title"><strong>{{ product.name }}</strong></h5>
                        <p class="card-text">Price : Rp. {{ product.price }}</p>
                        <p class="card-text">Stock : {{ product.stock }}</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Edit</a>
                        <a href="#" class="card-link">Delete</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListProducts',
  props: ['product'],
  }
</script>

<style scoped>
.container{
    padding: 25px;
}
</style>
