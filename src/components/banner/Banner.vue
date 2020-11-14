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
                  <tr v-for="banner in banners" :key="banner.id">
                    <td>
                      <img
                        src="https://www.kindpng.com/picc/m/465-4653741_e-commerce-banner-ecommerce-web-development-services-hd.png"
                        width="48"
                        alt="Banner Image"
                        class="img-fluid img-thumbnail"
                      />
                    </td>
                    <td><h5>{{ banner.name }}</h5></td>
                    <td>{{ formatDate(banner.start_date) }}</td>
                    <td>{{ formatDate(banner.end_date) }}</td>
                    <td><strong><span :class="getColor(banner.is_active)">{{ getStatus(banner.is_active) }}</span></strong></td>
                    <td><strong><span :class="getColorCategory(banner.Category)"> {{ getCategory(banner.Category) }} </span></strong></td>
                    <td>
                      <a href="javascript:void(0);"
                      @click.prevent="editBanner(banner.id)"
                        class="btn btn-default waves-effect waves-float btn-sm waves-green"
                        ><i class="zmdi zmdi-edit"></i
                      ></a>
                      <a
                        @click.prevent="confirmDelete(banner.id)"
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
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('changePageTitle', 'Banner List')
    this.getBanners()
  },
  methods: {

    async getBanners () {
      await this.$store.dispatch('getBanners')
      this.loading = false
    },
    editBanner (bannerId) {
      console.log(bannerId + 'Edited')
    },
    confirmDelete (bannerId) {
      console.log(bannerId + 'Deleted')
    },
    getStatus (status) {
      return (status === 'true') ? 'Active' : 'Inactive'
    },
    getColor (status) {
      return (status === 'true') ? 'col-green' : 'col-red'
    },
    getColorCategory (category) {
      return (category === null) ? 'col-red' : 'text-dark'
    },
    getCategory (category) {
      return (category !== null) ? category.name : 'No Category'
    },
    formatDate (date) {
      const month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const newDate = new Date(date)
      return newDate.getDate() + ' ' + month[newDate.getMonth()] + ' ' + newDate.getFullYear()
    }
  }
}
</script>

<style>

</style>
