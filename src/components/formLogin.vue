<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
      />
    </div>
    <div class="tombol">
      <button type="submit" class="btn btn-primary">Login</button>
      <button class="btn btn-warning">Cancel</button>
    </div>
  </form>
</template>

<script>
import axios from "../axios/axiosinstance";
export default {
  name: "FormLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios({
        url: "/login",
        method: "post",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          this.$router.push({ name: "Product" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.tombol {
  display: flex;
  justify-content: space-between;
}
</style>
