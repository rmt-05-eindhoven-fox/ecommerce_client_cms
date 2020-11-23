<template>
<div class="login">
  <div class="sidenav">
    <div class="login-main-text">
      <h2>E-Commerce-CMS<br><br> Login Page</h2>
      <br>
      <p>Login here to access.</p>
    </div>
  </div>
  <div class="main">
    <div class="col-md-4 col-sm-12">
      <div class="login-form">
        <form @submit.prevent="login">
          <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="text" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-black">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({
          data
        }) => {
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("id", data.id);
          this.$router.push({
            name: 'Dashboard'
          })
          Swal.fire({
            icon: "success",
            title: `Welcome ${this.email}`,
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Not For You",
            text: err.response.data.msg,
          });
        })
    }
  },
}
</script>

<style scoped>
.login {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>
