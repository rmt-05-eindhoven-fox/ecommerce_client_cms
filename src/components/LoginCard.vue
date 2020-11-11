<template>
  <div class="card-login">
    <div class="card">
      <div class="card-body">
        <h3>CMS E-commerce</h3>
        <small id="emailHelp" class="form-text text-center text-muted mb-2"
          >Login with admin account to access CMS</small
        >
        <form action="">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-block">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginCard'
}
</script>

<style></style>
