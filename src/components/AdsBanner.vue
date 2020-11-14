<template>
  <div class="addBanner">
    <div class="d-flex justify-content-around navbar">
      <div></div>
      <p class="navbar-title">
        ADD BANNER
      </p>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>

    <div class="container mt-5">
      <div class="wrapper">
        <div id="formContent">
          <!-- Icon -->
          <h1><i class="far fa-image text-secondary"></i></h1>

          <!-- Login Form -->
          <form @submit.prevent="addBanner">
          <h5 v-if="isError" class="text-danger">{{isError}}</h5>
            <div class="input-group flex-nowrap">
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
  name: 'AddBanner',
  data () {
    return {
      title: '',
      image_url: '',
      status: '',
      isError: ''
    }
  },
  methods: {
    addBanner () {
      this.$loading(true)
      const payload = {
        title: this.title,
        image_url: this.image_url,
        status: this.status
      }
      this.$store.dispatch('addBanner', payload)
        .then(({ data }) => {
          this.$router.push('/dashboard')
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
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 5em;
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
.addBanner {
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
