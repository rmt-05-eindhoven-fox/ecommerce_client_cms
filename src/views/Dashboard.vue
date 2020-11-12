<template>
  <div id='Landing'>
    <Sidebar/>
    <section class="content">
      <div class="body_scroll">
        <div class="block-header">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h2>{{ pageTitle }}</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#"><i class="zmdi zmdi-home"></i> Home</a>
                </li>

                <li class="breadcrumb-item active">Product List</li>
              </ul>
              <button
                class="btn btn-primary btn-icon mobile_menu"
                type="button"
              >
                <i class="zmdi zmdi-sort-amount-desc"></i>
              </button>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12">
              <button
                class="btn btn-primary btn-icon float-right right_icon_toggle_btn"
                type="button"
              >
                <i class="zmdi zmdi-arrow-right"></i>
              </button>
              <button
                @click.prevent="logout"
                class="btn btn-danger btn-icon float-right"
                type="button"
              >
                <i class="zmdi zmdi-power"></i>
              </button>
              <button
                v-if="buttonAdd"
                @click.prevent="showAddProduct"
                class="btn btn-success btn-icon float-right"
                type="button"
              >
                <i class="zmdi zmdi-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Content Menu -->
        <router-view />
      </div>
    </section>
    <AddProduct
    v-if="showModal"
    v-show="showModal"
    @isDisplayModal="isDisplayModal" />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/dashboard/Sidebar.vue'
import AddProduct from '@/components/product/AddProduct.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    AddProduct
  },
  computed: {
    title () {
      return this.$store.state.title
    },

    pageTitle () {
      return this.$store.state.pageTitle
    }
  },

  data () {
    return {
      buttonAdd: false,
      showModal: false,
      loading: false
    }
  },

  created () {
    this.showButton()
  },

  updated () {
    this.showButton()
  },

  methods: {
    isDisplayModal (params) {
      this.showModal = params
    },

    showAddProduct () {
      this.isDisplayModal(true)
    },

    showButton () {
      if (this.$route.name === 'Product') {
        this.buttonAdd = true
      } else {
        this.buttonAdd = false
      }
    },

    logout () {
      console.log('Logout')
      localStorage.clear()
      this.$store.dispatch('clearUserInfo')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
</style>
