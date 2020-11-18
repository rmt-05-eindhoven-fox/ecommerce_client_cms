<template>
  <div id="add-form">
    <form @submit.prevent="addProduct" class="add-form">
      <div class="form-group">
        <label for="product-name">Product Name</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          id="product-name"
          placeholder="e.g. Earthree Gundam (HGBD:R)"
        />
      </div>
      <div class="form-group">
        <label for="product-images-url">Image URL</label>
        <input
          v-model="product.images_url"
          type="url"
          class="form-control"
          placeholder="e.g. https://www.1999.co.jp/itbig63/10631811.jpg"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Price</label>
        <input
          v-model="product.price"
          type="number"
          class="form-control"
          id="product-price"
          placeholder="e.g. 230000"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Stock</label>
        <input
          v-model="product.stock"
          type="number"
          class="form-control"
          id="product-stock"
          placeholder="e.g. 1, 2, 3 or more"
        />
      </div>
      <!-- <div class="form-group">
        <label for="product-name">Category</label>
        <input
          v-model="product.category"
          type="text"
          class="form-control"
          id="product-category"
          placeholder="Enter category of product"
        />
      </div> -->
      <button type="submit" class="add-btn btn btn-light">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: FormAddProduct,
  data() {
    return {
      product: {
        name: "",
        images_url: "",
        price: "",
        stock: "",
        //category: "",
      },
    };
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },
    addProduct() {
      const payload = {
        name: this.product.name,
        images_url: this.product.images_url,
        price: this.product.price,
        stock: this.product.stock,
        //category: this.product.category,
      };
      this.$store
        .dispatch("AddProduct", payload)
        .then(({ data }) => {
          console.log("Add New Product Success!");
          this.fetchProducts();
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          console.log(error.response);
          console.log("Add New Product Failed!");
        });
    },
  },
};
</script>

<style>
</style>