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
                  <tr>
                    <td>
                      <img
                        src="../../assets/images/logo.png"
                        width="48"
                        alt="Product img"
                      />
                    </td>
                    <td><h5>Simple Black Clock</h5></td>
                    <td>Rp12.000</td>
                    <td>5</td>
                    <td>
                      <span class="col-red">Stock will run out</span>
                    </td>
                    <td>
                      <a href="javascript:void(0);"
                      @click.prevent="showEditProduct"
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

    <!-- <EditProduct
    v-if="showModal"
    v-show="showModal"
    @isDisplayModal="isDisplayModal"/> -->

  </div>
</template>

<script>
// import EditProduct from '@/components/product/EditProduct.vue'

export default {
  name: 'ListProduct',
  data () {
    return {
      showModal: false
    }
  },
  components: {
  },

  created () {
    this.getProducts()
  },

  methods: {
    isDisplayModal (params) {
      this.showModal = params
    },

    showEditProduct () {
      console.log('clicked')
      this.isDisplayModal(true)
    },

    getProducts () {
      this.$store.dispatch('getProducts')
    }
  }
}
</script>

<style>
</style>
