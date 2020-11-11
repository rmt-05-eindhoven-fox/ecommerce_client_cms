<template>
  <div id='app'>
    <Sidebar/>

    <section class="content">
      <div class="body_scroll">
        <div class="block-header">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h2>Product List</h2>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>

<style>
</style>
