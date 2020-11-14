<template>
  <div class="banner">
    <div class="row nav">
      <div class="col-1">
        <div class="nav flex-column nav-pills navpil" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <h1><i class="fas fa-user-circle text-light"></i></h1>
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/addProduct" class="nav-link">Add Product</router-link>
          <a style="background: #ededed" class="nav-link active text-secondary" id="v-pills-banner-tab" data-toggle="pill" href="#v-pills-banner" role="tab" aria-controls="v-pills-banner" aria-selected="false">Banner</a>
          <router-link to="/addBanner" class="nav-link">Add Banner</router-link>
        </div>
      </div>
      <div style="padding: 0px" class="col-11">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-banner" role="tabpanel" aria-labelledby="v-pills-banner-tab"><Banner/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'BannerPage',
  components: {
    Banner
  },
  methods: {
    isLogin () {
      if (!localStorage.getItem('token')) {
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.isLogin()
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 3em;
}
.nav {
  background: #2c393f;
}
.col-1 {
  padding: 5px 0 0 30px;
}
</style>
