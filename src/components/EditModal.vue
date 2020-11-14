<template>
<div class="modal fade" :id="'EditModal' + product.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h2 class="modal-title">Update Product</h2>
        </div>
        <div class="modal-body">
        <form @submit.prevent="EditProduct">
            <div class="form-group">
              <label for="focusedinput"><h2>Name</h2></label>
              <input v-model="name" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="form-group">
              <label for="focusedinput" ><h2>Price</h2></label>
              <input v-model="price" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="form-group">
              <label for="focusedinput"><h2>Stock</h2></label>
              <input v-model="stock" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="form-group">
              <label for="focusedinput"><h2>Image</h2></label>
              <input v-model="image_url" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
            <!-- <div class="form-group">
            <label for="exampleInputFile"><h2>Image</h2></label>
            <input type="file" id="exampleInputFile">
            </div> -->
        </form>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: "EditModal",
    data () {
        return {
            name: '',
            image_url: '',
            price: '',
            stock: ''
        }
    },
    props: ['product'],
    methods: {
        EditProduct () {
            const payload = {
                id: this.product.id,
                name: this.name,
                image_url: this.image_url,
                price: this.price,
                stock: this.stock
            }
            this.$store.dispatch('editProduct', payload)
            this.$store.dispatch('fetchProducts')
        }
    },
    created () {
        this.name = this.product.name
        this.image_url = this.product.image_url
        this.price = this.product.price
        this.stock = this.product.stock
    }
}
</script>

<style>

</style>
