<template>
    <footer>
  <div class="footer" style="clear: both;">
    <div class="footer-logo">My Shop</div>
    <div class="footer-list">
      <ul>
        <li>Tentang</li>
        <li>Saran</li>
        <li>email</li>
      </ul>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scopped>
    .footer {
    width: 100%;
    background-color: lightgray;
    color:black;
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }
.footer-logo {
    padding-left: 50px;
    font-size: 32px;
}
.footer-list {
    padding-right: 50px ;
}
.footer-list ul {
    display: flex;
  }

  .footer-list li {
    padding: 10px;
  }
</style>
