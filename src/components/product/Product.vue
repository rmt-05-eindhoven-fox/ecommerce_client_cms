<template>
  <div id="list-product">
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
                    <td>{{ product.price }}</td>
                    <td>{{ product.stock }}</td>
                    <td>
                      <span class="col-red">Stock will run out</span>
                    </td>
                    <td>
                      <a href="javascript:void(0);"
                      @click.prevent="editProduct(product.id)"
                        class="btn btn-default waves-effect waves-float btn-sm waves-green"
                        ><i class="zmdi zmdi-edit"></i
                      ></a>
                      <a
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

export default {
  name: 'ListProduct',
  data () {
    return {
      showModal: false,
      product: {}
    }
  },
  components: {
    EditProduct
  },

  computed: {
    products () {
      return this.$store.state.products
    }
  },

  created () {
    this.getProducts()
  },

  methods: {
    isDisplayModal (params) {
      this.showModal = params
    },

    getProducts () {
      this.$store.dispatch('getProducts')
    },

    async editProduct (id) {
      try {
        const result = await this.$store.dispatch('getProductById', id)
        this.product = result
        this.isDisplayModal(true)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
