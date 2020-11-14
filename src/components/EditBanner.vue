<template>
  <div class="editBanner">
    <div class="d-flex justify-content-around navbar">
      <div></div>
      <p class="navbar-title">
        EDIT BANNER
      </p>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>

    <div class="container">
      <div class="wrapper">
        <div id="formContent">
          <!-- Icon -->
          <img :src="image_url" alt="Banner Image">

          <!-- Login Form -->
          <form @submit.prevent="editBanner">
          <h5 v-if="isError" class="text-danger">{{isError}}</h5>
            <div class="input-group flex-nowrap mt-5">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping"><i class="fas fa-tags"></i></span>
              </div>
              <input v-model="title" type="text" class="form-control" placeholder="Banner name" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group flex-nowrap mt-5">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping"><i class="fas fa-link"></i></span>
              </div>
              <input required v-model="image_url" type="url" class="form-control" placeholder="http://" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group mb-3 mt-5">
              <div class="input-group-prepend">
                <label class="input-group-text"><i class="fas fa-check"></i></label>
              </div>
              <select class="custom-select" v-model="status">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <input class="mt-5" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditBanner',
  data () {
    return {
      title: '',
      image_url: '',
      status: '',
      isError: ''
    }
  },
  methods: {
    editBanner () {
      this.$loading(true)
      const payload = {
        title: this.title,
        image_url: this.image_url,
        status: this.status,
        id: this.$route.params.id
      }
      this.$store.dispatch('putBanner', payload)
        .then(({ data }) => {
          this.$router.push('/banner')
          this.$loading(false)
        })
        .catch(err => {
          if (err.response.data.error) {
            this.isError = err.response.data.error
            this.$loading(false)
          } else {
            this.$loading(false)
          }
        })
    },
    fetchBannerById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchBannerById', id)
        .then(({ data }) => {
          if (!data) {
            this.$router.push('/404')
          } else {
            this.title = data.title
            this.image_url = data.image_url
            this.status = data.status
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.$router.push('/404')
          } else {
            console.log(err)
          }
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.fetchBannerById()
  }
}
</script>

<style scoped>
.text-left {
  padding-left: 20px;
}
.navbar {
  background: #2c393f;
  color: white;
  height: 7vh;
}
.navbar-title {
  font-size: 20px;
  margin: auto;
}
.editBanner {
  background: #ededed;
  height: 100vh;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
img {
  max-width: 400px;
}
.card {
  width: 40%;
}
#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 20px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
