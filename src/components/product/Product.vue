<template>
  <div id="list-product">
    <Loading :loading="loading"/>
    <div class="container-fluid">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card">
            <div class="table-responsive">
              <table
                class="table table-hover product_item_list c_table theme-color mb-0"
              >
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th data-breakpoints="xs">Price</th>
                    <th data-breakpoints="xs md">Stock</th>
                    <th data-breakpoints="xs md">Status</th>
                    <th data-breakpoints="sm xs md">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <td>
                      <img
                        :src="product.image_url"
                        width="48"
                        alt="Product img"
                      />
                    </td>
                    <td><h5>{{ product.name }}</h5></td>
                    <td>Rp {{ formatNumber(product.price) }}</td>
                    <td>{{ product.stock }}</td>
                    <td>
                      <span :class="colorStatus(product.stock)">{{ cekStock(product.stock) }}</span>
                    </td>
                    <td>
                      <a href="javascript:void(0);"
                      @click.prevent="editProduct(product.id)"
                        class="btn btn-default waves-effect waves-float btn-sm waves-green"
                        ><i class="zmdi zmdi-edit"></i
                      ></a>
                      <a
                        @click.prevent="confirmDelete(product.id)"
                        href="javascript:void(0);"
                        class="btn btn-default waves-effect waves-float btn-sm waves-red"
                        ><i class="zmdi zmdi-delete"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EditProduct
    v-if="showModal"
    v-show="showModal"
    :product="product"
    @isDisplayModal="isDisplayModal"/>

  </div>
</template>

<script>
import EditProduct from '@/components/product/EditProduct.vue'
import axios from '@/config/axios'
import Loading from '@/components/loading/Loading.vue'
import Swal from 'sweetalert2'

export default {
  name: 'ListProduct',
  data () {
    return {
      showModal: false,
      loading: false,
      product: {}
    }
  },
  components: {
    EditProduct,
    Loading
  },

  computed: {
    products () {
      return this.$store.state.products
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('changePageTitle', 'Product List')
    this.getProducts()
  },

  methods: {

    async getProducts () {
      await this.$store.dispatch('getProducts')
      this.loading = false
    },

    async editProduct (id) {
      try {
        this.loading = true
        const result = await this.$store.dispatch('getProductById', id)
        this.product = result
        this.isDisplayModal(true)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async deleteProduct (id) {
      try {
        this.loading = true
        await axios({
          url: 'products/' + id,
          method: 'delete',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.$store.dispatch('getProducts')
      } catch (error) {
        console.log(error.response)
      } finally {
        this.loading = false
      }
    },

    isDisplayModal (params) {
      this.showModal = params
    },

    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },

    cekStock (stock) {
      let message = 'Ready Stock'
      this.colorStockStatus = 'col-green'

      if (stock < 1) {
        message = 'Out of Stock'
        this.colorStockStatus = 'col-red'
      } else if (stock <= 5) {
        this.colorStockStatus = 'col-yellow'
        message = 'Stock will run out'
      }
      return message
    },

    colorStatus (stock) {
      let color = 'col-green'
      if (stock < 1) {
        color = 'col-red'
      } else if (stock <= 5) {
        color = 'col-orange'
      }
      return color
    },

    confirmDelete (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true
          axios({
            url: 'products/' + id,
            method: 'delete',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then((result) => {
              this.$store.dispatch('getProducts')
              Swal.fire('Success', 'Success deleted product!', 'success')
            }).catch((error) => {
              const message = error.response.data.message || 'Somthing error'
              Swal.fire('Delete Failed', message, 'error')
              console.log(error.response)
            }).then(() => {
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style>
</style>
