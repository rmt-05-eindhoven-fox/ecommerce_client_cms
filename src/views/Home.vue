<template>
  <div class="home" style="overflow:hidden">
    <div id="nav">
      <div class="text-small">E-commerce CMS</div>
      <a class="text-decoration-none text-grey text-small" @click.prevent="changePage(``)" href=""> Home</a> |
      <a class="text-decoration-none  text-grey text-small" @click.prevent="changePage(`addProduct`)" href="">
        Add
        <i class="far fa-plus-square">
        </i>
      </a> |
      <a class="text-decoration-none  text-grey text-small" @click.prevent="logout" href="">Logout</a>
    </div>
    <Dashboard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'Home',
  components: {
    Dashboard
  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')

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
      Toast.fire({
        icon: 'success',
        title: 'Signed out successfully'
      })
    },
    changePage (path) {
      this.$store.dispatch('changePage', path)
    }
  }
}
</script>

<style>
  * {
    font-family: 'Poppins', sans-serif;

  }
  html body {
    background-color: pink;
  }
  .text-pink {
    color: #f66483;
  }
  .text-grey {
    color: #5d5b6a;
    transition: all .5s;
  }
  .text-grey:hover {
    color: #f66483;
    text-shadow: #f66483 0 0 2px;
    /* background-color: black; */
  }
  .text-small {
    font-size: 14px;
    color: #5d5b6a;
    /* font-weight: bold; */
  }
  .text-brown {
    color: #222222
  }
  .btn-brown {
    color: #fff;
    background-color: #f66483;
    border-radius: 5px;
    transition: all .3s;
  }
  .btn-brown:hover {
    background-color: pink;
    color: #5d5b6a;
  }



</style>
