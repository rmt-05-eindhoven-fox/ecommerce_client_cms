<template>
  <div class="addBanner">
    <div class="row nav">
      <div style="padding-left: 15px" class="col-1">
        <div class="nav flex-column nav-pills navpil" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/addProduct" class="nav-link">Add Product</router-link>
          <router-link to="/banner" class="nav-link">Banner</router-link>
          <a class="nav-link active" id="v-pills-addBanner-tab" data-toggle="pill" href="#v-pills-addBanner" role="tab" aria-controls="v-pills-addBanner" aria-selected="false">Add Banner</a>
        </div>
      </div>
      <div style="padding: 0px" class="col-11">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-addBanner" role="tabpanel" aria-labelledby="v-pills-addBanner-tab"><AdsBanner/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdsBanner from '@/components/AdsBanner.vue'
export default {
  name: 'AddBanner',
  components: {
    AdsBanner
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

<style>
.nav {
  background: #2c393f;
}
.col-1 {
  margin-top: 4em;
}
</style>
