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
                    <th data-breakpoints="xs">Category</th>
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
                    <td><h5>{{ getCategory(product.Category) }}</h5></td>
                    <td>Rp {{ formatNumber(product.price) }}</td>
                    <td>{{ product.stock }}</td>
                    <td>
                      <b><span style="font-size: 0.8rem; padding: 6px" :class="colorStatus(product.stock)">{{ cekStock(product.stock) }}</span></b>
                    </td>
                    <td>
                      <button
                      @click.prevent="editProduct(product.id)"
                        class="btn btn-primary waves-effect waves-float btn-sm waves-green"
                        ><i class="zmdi zmdi-edit"></i
                      ></button>
                      <button
                        @click.prevent="confirmDelete(product.id)"
                        href="javascript:void(0);"
                        class="btn btn-danger waves-effect waves-float btn-sm waves-red"
                        ><i class="zmdi zmdi-delete"></i
                      ></button>
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

    getCategory (category) {
      if (category) {
        return category.name
      }
      return 'No categories'
    },

    isDisplayModal (params) {
      this.showModal = params
    },

    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },

    cekStock (stock) {
      let message = 'In Stock'
      if (stock < 1) {
        message = 'Out of Stock'
      } else if (stock <= 5) {
        message = 'Low Stock'
      }
      return message
    },

    colorStatus (stock) {
      let color = 'badge badge-success'
      if (stock < 1) {
        color = 'badge badge-danger'
      } else if (stock <= 5) {
        color = 'badge badge-warning'
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
