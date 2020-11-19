<template>
  <div class="container-fluid">
    <h1>Edit Page</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Name</label>
        <input
          v-model="productById.name"
          type="text"
          class="form-control"
          id="name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Image_Url</label>
        <input
          v-model="productById.image_url"
          type="text"
          class="form-control"
          id="image_url"
          name="image_url"
        />
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Price</label>
        <input
          v-model="productById.price"
          type="number"
          class="form-control"
          id="price"
          name="price"
          min="1000"
        />
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Stock</label>
        <input
          v-model="productById.stock"
          type="number"
          class="form-control"
          id="stock"
          name="stock"
          min="0"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="updateProduct"
      >
        Update Product
      </button>
      <button type="button" class="btn btn-secondary">Close</button>
    </form>
  </div>
</template>

<script>
import axios from "../axios/axiosinstance";
export default {
  name: "Home",
  data() {
    return {
      id: this.$route.params.id,
      productById: {},
    };
  },
  methods: {
    findById() {
      const id = this.id;
      const token = localStorage.token;
      this.$store.dispatch("findById");
    },
    updateProduct() {
      const id = this.id;
      const token = localStorage.token;
      axios({
        url: `/product/${id}`,
        method: "put",
        headers: { token },
        data: {
          name: this.productById.name,
          image_url: this.productById.image_url,
          price: this.productById.price,
          stock: this.productById.stock,
        },
      })
        .then(({ data }) => {
          this.$router.push({ name: "Product" });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // contoh() {
    //   const token = localStorage.token;
    //   axios({
    //     url: "/product",
    //     method: "post",
    //     data: {
    //       name: this.newProduct.name,
    //       image_url: this.newProduct.image_url,
    //       price: this.newProduct.price,
    //       stock: this.newProduct.stock,
    //     },
    //     headers: {
    //       token: token,
    //     },
    //   })
    //     .then(({ data }) => {
    //       this.$emit("fetchProductLists");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  created() {
    this.findById();
  },
};
</script>

<style>
</style>
