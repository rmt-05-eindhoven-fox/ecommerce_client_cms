<template>
<div>
  <header>
    <a href="" @click.prevent="toHome"><h1>Ecommerce Admin</h1></a>
    <a @click.prevent="toBanner" class="cta"><button>Banner</button></a>
    <a @click.prevent="logout" class="cta"><button>Logout</button></a>
  </header>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      Swal.fire(
        'See you <3!'
      )
      this.$router.push('/login')
    },
    toBanner () {
      this.$router.push('/banner')
    },
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@900&display=swap" rel="stylesheet');

* {
    box-sizing: 0;
    margin: 0;
    padding: 0;
    background-color: black;
}
a , button {
    font-family: "Big Shoulders Stencil Text";
    font-weight: 500;
    font-size: 16px;
    color: white;
    text-decoration: none;
}
h1 {
    font-family: "Big Shoulders Stencil Text";
    font-weight: 500;
    color: white;
    text-decoration: none;
}
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 10%;
}

.logo {
    cursor: pointer;
}

.navbar_link {
    list-style: none;
}
.navbar_link li {
    display: inline-block;
    padding: 0px 20px;
}
.navbar_link li a {
    transition: all 0.3s ease 0s;
}
.navbar_link li a:hover {
    color: teal;
}

button {
    padding: 9px 25px;
    background-color: red;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
button:hover {
    background-color: green;
}
</style>
