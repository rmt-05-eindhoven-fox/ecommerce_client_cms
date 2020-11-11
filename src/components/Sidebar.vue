<template>
  <div class="sidebar-sticky pt-3 sb">
    <div class="user-login">
      <p>Welcome,<br /><strong>Dicky Andeyan</strong></p>
      <small>Logged in as Admin</small>
    </div>
    <ul class="nav flex-column">
      <p
        class="font-weight-bold pl-2"
        style="color: #333399; background-color: #ffffff"
      >
        Navigation
      </p>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="home"></span>
          Dashboard <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="file"></span>
          Add Products
        </a>
      </li>
      <li class="nav-item mt-5">
        <a class="nav-link" href="#">
          <span data-feather="shopping-cart"></span>
          Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
</style>
