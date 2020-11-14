<template>
  <div style="margin-top: 10%; background-color: #fff;" >
    <div class="row justify-content-center ml-4" style="position: relative; ">
      <div class="col-4">
      </div>
      <img src="../assets/surr-315.png" style="height: 80vh; position: absolute; z-index: 999; left: 110px; top: -80px">

      <div class="card shadow rounded-0 border p-2 my-4 align-items-center"  >
        <div class="card-body">

            <form @submit.prevent="login">
               <h4 class="text-center text-pink font-weight-bold" style="font-size: 19px">E-commerce CMS</h4>
              <div class="form-group ">
                <label class="text-small" >
                    Email
                </label>
                <input
                    v-model="email"
                    class="form-control text-pink text-center"
                    type="email"
                >
              </div>

              <div class="form-group">
                <label class="text-small">
                    Password
                </label>
                <input
                  v-model="password"
                  class="form-control text-pink text-center"
                  type="password"
                >
              </div>

              <button type="submit" class="btn-brown btn-block">Login</button>
            </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response.data.msg
          })
        })
    }
  }
}
</script>

<style scoped >
  .border {
    outline: 20px solid #f66483 ;
    outline-offset: 40px;


  }
  .border {
    border: 1px solid pink !important;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    /* border: 10px solid rgba(0, 0, 0, 0.125); */
    /* border-radius: 0.25rem; */
}
</style>
