<template>
  <div class="home">
    <div class="row nav">
      <div class="col-1">
        <div class="nav flex-column nav-pills navpil" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <h1><i class="fas fa-user-circle text-light"></i></h1>
          <a style="background: #ededed" class="nav-link active text-secondary" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</a>
          <router-link to="/addProduct" class="nav-link">Add Product</router-link>
          <router-link to="/banner" class="nav-link">Banner</router-link>
          <router-link to="/addBanner" class="nav-link">Add Banner</router-link>
        </div>
      </div>
      <div style="padding: 0px" class="col-11">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab"><Dashboard/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'HomePage',
  components: {
    Dashboard
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
