<template>
  <div id="list-banner">
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
                    <th>Name</th>
                    <th data-breakpoints="xs md">Star Date</th>
                    <th data-breakpoints="xs md">End Date</th>
                    <th data-breakpoints="xs">Is Active</th>
                    <th data-breakpoints="xs md">Category</th>
                    <th data-breakpoints="sm xs md">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://www.kindpng.com/picc/m/465-4653741_e-commerce-banner-ecommerce-web-development-services-hd.png"
                        width="48"
                        alt="Banner Image"
                        class="img-fluid img-thumbnail"
                      />
                    </td>
                    <td><h5>Nama Banner</h5></td>
                    <td>21 Nov 2020</td>
                    <td>22 Nov 2020</td>
                    <td>Active</td>
                    <td>Pakaian Pria</td>
                    <td>
                      <a href="javascript:void(0);"
                      @click.prevent="editBanner(product.id)"
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
  </div>
</template>

<script>
import Loading from '@/components/loading/Loading.vue'

export default {
  name: 'Banner',
  data () {
    return {
      loading: false
    }
  },
  components: {
    Loading
  },
  created () {
    this.loading = false
    this.$store.dispatch('changePageTitle', 'Banner List')
  },
  methods: {
    editBanner (bannerId) {
      console.log(bannerId + 'Edited')
    },
    confirmDelete (bannerId) {
      console.log(bannerId + 'Deleted')
    }
  }
}
</script>

<style>

</style>
