<template>
  <div class="container-fluid">
    <div class="logintengah">
      <div class="card ukCard">
        <div class="card-header">Login</div>
        <div class="card-body">
          <FormLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from "@/components/formLogin.vue";

export default {
  name: "Auth",
  components: {
    FormLogin,
  },
};
</script>

<style scoped>
.logintengah {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.ukCard {
  width: 40%;
}
</style>
