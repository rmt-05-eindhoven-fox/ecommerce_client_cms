<template>
  <div class="container" style="position: relative;">
    <h1 class="text-brown pb-2 font-weight-bold">Product List</h1>
    <img class="img-left" src="../assets/surr-289.png" >
    <img class="img-right" src="../assets/surr-no-comments.png">
    <div class="row justify-content-center">

      <table>
        <tr>
          <td>
            <div class="border scrollbar scrollbar-black bordered-black square thin shadow" style="height:60vh; overflow-y:auto;">
              <table>
                <tr style="color:white;background-color:#f66483; height:7vh; font-size:14px">
                  <th  class="px-3">No</th>
                  <th  class="px-3">Image</th>
                  <th  class="px-3">Name</th>
                  <th  class="px-3">Price</th>
                  <th  class="px-3">Stock</th>
                  <th  class="px-3">Actions</th>
                </tr>
                <tr
                  v-for="(product, index) in products"
                  :key="product.id"
                  class="hover-tr border-bottom"
                >
                  <td class="num ">{{index + 1}}</td>
                  <td class="px-4">
                    <img
                      :src="product.image_url"
                      @error="imageError = true"
                      style="width: 65px; height: 65px; object-fit: contain"
                      >
                  </td>
                  <td class="px-3">{{product.name}}</td>
                  <td class="px-3">Rp {{product.price.toLocaleString(['ban', 'id'])}}</td>
                  <td class="px-3">{{product.stock}}</td>
                  <td class="px-3">
                      <i @click="changePage(`editProduct/${product.id}`)" class="fas fa-edit mr-1" type="button"></i>
                      <i @click="deleteProduct (product.id)" class="far fa-trash-alt ml-1" type="button"></i>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }

  },
  methods: {
    changePage (path) {
      this.$store.dispatch('changePage', path)
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f66483',
        cancelButtonColor: '#5d5b6a',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.$store.dispatch('deleteProduct', id)
              .then(() => {
                this.fetchProduct()
              })
              .catch(err => {
                if (+err.response.status === 404) {
                  this.$router.push({ name: 'NotFound' })
                } else {
                  console.log(err.response.data)
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.msg
                  })
                }
              })
          }
        })
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hover-tr {
    transition: all .5s;
    font-size: 12px;
    background-color: white;
  }
  .hover-tr:hover {
    /* font-size: 30px; */
    background-color: #f66483;
    color: #ffffff;
    /* transform: scale(1.03); */
  }
  .hover-tr td img {
    transition: all .5s;
  }
  .hover-tr:hover td img {
    transform: scale(2.0);
    border: 1px solid #f66483 !important;
    background-color: #fff;
  }
  .table {
    height: 75vh;
    overflow-y: scroll;
  }

  .scrollbar-black::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #F5F5F5;
    border-radius: 0px; }

    .scrollbar-black::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5; }

    .scrollbar-black::-webkit-scrollbar-thumb {
    border-radius: 0px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #5d5b6a; }

    .scrollbar-black {
    scrollbar-color: #5d5b6a #F5F5F5;
  }

  .img-left {
    height: 80vh; position: absolute; z-index: 999; left: -250px; top: -20px;
    transition: all .5s;
  }
  .img-left:hover {
    left: -150px
    /* background-color: aqua; */
  }

  .img-right {
    height: 80vh; position: absolute; z-index: 999; right: -250px; top: -20px;
    transition: all .5s;
  }
  .img-right:hover {
    right: -150px
    /* background-color: aqua; */
  }

  .fa-edit {
    transition: all .5s;
  }
  .fa-edit:hover {
    transform: scale(1.3);
    text-shadow: #fff 0 0 5px;
  }

  .fa-trash-alt {
    transition: all .5s;
  }
  .fa-trash-alt:hover {
    transform: scale(1.3);
    text-shadow: #fff 0 0 5px;
  }

  /* .num {
    color: #f66483;
  } */

  .hover-tr .num{
    transition: all .3s;
    font-size: 12px;
    background-color: white;
    color: #f66483;
  }
  .hover-tr:hover .num{
    /* font-size: 30px; */
    background-color: #f66483;
    color: #ffffff;
    /* transform: scale(1.03); */
  }
  /* .border {
    border: 5px solid #f66483 !important;
  } */
</style>
