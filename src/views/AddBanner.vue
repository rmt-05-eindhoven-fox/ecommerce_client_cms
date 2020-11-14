<template>
  <div class="addBanner">
    <div class="row nav">
      <div class="col-1">
        <div class="nav flex-column nav-pills navpil" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <h1><i class="fas fa-user-circle text-light"></i></h1>
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/addProduct" class="nav-link">Add Product</router-link>
          <router-link to="/banner" class="nav-link">Banner</router-link>
          <a style="background: #ededed" class="nav-link active text-secondary" id="v-pills-addBanner-tab" data-toggle="pill" href="#v-pills-addBanner" role="tab" aria-controls="v-pills-addBanner" aria-selected="false">Add Banner</a>
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
