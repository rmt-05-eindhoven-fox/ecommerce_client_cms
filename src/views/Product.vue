<template>
  <div class="container-fluid">
    <h1>Product List</h1>
    <div class="btnTop">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#formAddProduct"
        data-whatever="@mdo"
      >
        Add Product
      </button>
      <button class="btn btn-danger" @click.prevent="logout">LOGOUT</button>
    </div>
    <br />
    <formAddProduct @fetchProductLists="fetchProductLists" />
    <div class="row tengah">
      <ProductCard
        v-for="productList in productLists"
        :key="productList.id"
        :productList="productList"
        @fetchProductLists="fetchProductLists"
      />
    </div>
  </div>
</template>

<script>
import axios from "../axios/axiosinstance";
import ProductCard from "../components/ProductCard";
import formAddProduct from "../components/formAddProduct";
export default {
  name: "Product",
  components: {
    ProductCard,
    formAddProduct,
  },
  data() {
    return {
      productLists: [],
    };
  },
  methods: {
    fetchProductLists() {
      // console.log("method terpanggil");
      const token = localStorage.token;
      // axios
      // .post("/product", {
      //   title:this.title,
      // },{
      //   headers:{
      //     token:token
      //   }
      // })

      axios
        .get("/product", {
          headers: {
            token: token,
          },
        })

        .then(({ data }) => {
          // console.log(data);
          this.productLists = data;
        })
        .catch((err) => console.log(err));
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "Auth" });
    },
  },
  created() {
    if (!localStorage.token) {
      this.$router.push({ name: "Auth" });
    } else {
      this.fetchProductLists();
    }
  },
};
</script>

<style>
.tengah {
  justify-content: center;
  align-items: center;
}
.btnAdd {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.btnTop {
  display: flex;
  justify-content: space-between;
}
</style>
