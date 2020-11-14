<template>
  <div id="category" class="row">
    <div class="col-lg-6 col-md-12 col-sm-12">
      <div class="card">
        <div class="header">
          <h2><strong>Product Categories</strong></h2>
        </div>
        <div class="body">
          <div v-if="showErrorProdCat" class="alert alert-danger alert-dismissible fade show m-3 p-1">
            <ul class="m-b-0">
              <li v-for="(msg, i) in messageInfoProdCat" :key="i" class="p-l-1 m-b-0">{{ msg.error }}</li>
            </ul>
          </div>
          <form v-if="formProductCategory === 'add'" @submit.prevent="saveProdCategory">
            <div class="input-group mb-3">
              <input v-model="modelProductCategory" type="text" class="form-control" placeholder="Category Name ..." required>
              <div class="input-group-append bg-primary">
                <button type="submit" class="input-group-addon btn btn-primary"> <i class="zmdi zmdi-plus"></i> </button>
              </div>
            </div>
          </form>
          <form v-if="formProductCategory === 'edit'" @submit.prevent="updateProdCategory">
            <div class="input-group mb-3">
              <input v-model="modelProductCategory" type="text" class="form-control" required>
              <div class="input-group-append bg-info">
                <button type="submit" class="input-group-addon btn btn-info"> <i class="zmdi zmdi-edit"></i> </button>
              </div>
            </div>
          </form>
          <div class="table-responsive">
            <table class="table m-b-0">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Category Name</th>
                  <th scope="col" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category, i) in productCategories" :key="category.id">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>{{ category.name }}</td>
                  <td class="text-center">
                    <button
                    @click.prevent="editProductCat(category.id, category.name)"
                      class="btn btn-primary waves-effect waves-float btn-sm waves-green"
                      ><i class="zmdi zmdi-edit"></i
                    ></button>
                    <button
                      @click.prevent="deleteCategory(category.id)"
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

    <div class="col-lg-6 col-md-12 col-sm-12">
      <div class="card">
        <div class="header">
          <h2><strong>Banner Categories</strong></h2>
        </div>
        <div class="body">
          <div v-if="showErrorBannerCat" class="alert alert-danger alert-dismissible fade show m-3 p-1">
            <ul class="m-b-0">
              <li v-for="(msg, i) in messageInfoProdCat" :key="i" class="p-l-1 m-b-0">{{ msg.error }}</li>
            </ul>
          </div>
          <form v-if="formBannerCategory === 'add'" @submit.prevent="saveBannerCategory">
            <div class="input-group mb-3">
              <input v-model="modelBannerCategory" type="text" class="form-control" placeholder="Category Name ..." required>
              <div class="input-group-append bg-primary">
                <button type="submit" class="input-group-addon btn btn-primary"> <i class="zmdi zmdi-plus"></i> </button>
              </div>
            </div>
          </form>
          <form v-if="formBannerCategory === 'edit'" @submit.prevent="updateBannerCategory">
            <div class="input-group mb-3">
              <input v-model="modelBannerCategory" type="text" class="form-control" required>
              <div class="input-group-append bg-info">
                <button type="submit" class="input-group-addon btn btn-info"> <i class="zmdi zmdi-edit"></i> </button>
              </div>
            </div>
          </form>
          <div class="table-responsive">
            <table class="table m-b-0">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Banner Category Name</th>
                  <th scope="col" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category, i) in bannerCategories" :key="category.id">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>{{ category.name }}</td>
                  <td class="text-center">
                    <button
                    @click.prevent="editBannerCat(category.id, category.name)"
                      class="btn btn-primary waves-effect waves-float btn-sm waves-green"
                      ><i class="zmdi zmdi-edit"></i
                    ></button>
                    <button
                      @click.prevent="deleteCategory(category.id)"
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
</template>

<script>
import axios from '@/config/axios'
// import Loading from '@/components/loading/Loading.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Category',
  data () {
    return {
      // Product Categories
      formProductCategory: 'add',
      modelProductCategory: '',
      showErrorProdCat: false,

      // Banner Category
      formBannerCategory: 'add',
      modelBannerCategory: '',
      showErrorBannerCat: false,

      // General
      categoryId: '',
      messageInfoProdCat: []
    }
  },
  watch: {
    modelProductCategory () {
      if (this.modelProductCategory === '') {
        this.formProductCategory = 'add'
      }
    },
    modelBannerCategory () {
      if (this.modelBannerCategory === '') {
        this.formBannerCategory = 'add'
      }
    }
  },
  computed: {
    productCategories () {
      return this.$store.state.productCategories
    },
    bannerCategories () {
      return this.$store.state.bannerCategories
    }
  },
  methods: {
    async submitCategory (categoryName, method, type = '', id = '') {
      const payload = {
        name: categoryName,
        type: type
      }
      try {
        await axios({
          url: 'categories/' + id,
          method: method,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload
        })
        this.modelProductCategory = ''
        this.modelBannerCategory = ''
        this.showErrorProdCat = false
        this.showErrorBannerCat = false
        this.$store.dispatch('getCategories')
      } catch (error) {
        let msg = [{ error: 'Connection Failed' }]
        if (error.response) {
          msg = error.response.data.message
        }
        if (type === 'product') {
          this.showErrorProdCat = true
        } else {
          this.showErrorBannerCat = true
        }
        this.messageInfoProdCat = msg
      }
    },

    async deleteCategory (id) {
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
          axios({
            url: 'categories/' + id,
            method: 'delete',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then((result) => {
            this.$store.dispatch('getCategories')
            Swal.fire('Success', 'Success deleted category!', 'success')
          }).catch((error) => {
            const message = error.response.data.message || 'Somthing error'
            Swal.fire('Delete Failed', message, 'error')
          })
        }
      })
    },

    async saveProdCategory () {
      await this.submitCategory(this.modelProductCategory, 'post', 'product')
    },

    async updateProdCategory () {
      await this.submitCategory(this.modelProductCategory, 'put', 'product', this.categoryId)
    },

    async saveBannerCategory () {
      await this.submitCategory(this.modelBannerCategory, 'post', 'banner')
    },

    async updateBannerCategory () {
      await this.submitCategory(this.modelBannerCategory, 'put', 'banner', this.categoryId)
    },

    editProductCat (id, name) {
      this.categoryId = id
      this.formProductCategory = 'edit'
      this.modelProductCategory = name
    },

    editBannerCat (id, name) {
      this.categoryId = id
      this.formBannerCategory = 'edit'
      this.modelBannerCategory = name
    }

  }
}
</script>

<style>

</style>
