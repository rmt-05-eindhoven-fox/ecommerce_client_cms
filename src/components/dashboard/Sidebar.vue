<template>
  <!-- Left Sidebar -->
  <aside id="leftsidebar" class="sidebar">
    <div class="navbar-brand">
      <button class="btn-menu ls-toggle-btn" type="button">
        <i class="zmdi zmdi-menu"></i>
      </button>
      <a href="#"
        ><img
          src="../../assets/images/logo.png"
          width="25"
          alt="Oshop"
        /><span class="m-l-10">VUESHOP</span></a
      >
    </div>
    <div class="menu">
      <ul class="list">
        <li>
          <div class="user-info">
            <a class="image" href="#"
              ><img src="../../assets/images/avatar.png" alt="User"
            /></a>
            <div class="detail text-left">
              <h4>{{ getFullname }}</h4>
              <small>{{ getRole }}</small>
            </div>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }">
            <i class="zmdi zmdi-home"></i><span>Home</span>
          </router-link>
          </li>
        <li>
          <router-link :to="{ name: 'Product' }">
            <i class="zmdi zmdi-shopping-basket"></i><span>Product</span>
          </router-link>
        </li>
        <li>
          <a href="javascript:void(0);" class="menu-toggle"
            ><i class="zmdi zmdi-apps"></i><span>Other</span></a
          >
          <ul class="ml-menu">
            <li><a href="#">Live Banner</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'LeftSidebar',
  data () {
    return {}
  },
  computed: {
    getFullname () {
      return localStorage.getItem('fullname')
    },
    getRole () {
      return localStorage.getItem('role')
    }
  },
  mounted () {
    this.ajaxPorses()
  },

  methods: {
    ajaxPorses () {
      $('.ls-toggle-btn').on('click', function () {
        console.log('clicked togel')
        $('body').toggleClass('ls-toggle-menu')
      })

      $('.right_icon_toggle_btn').on('click', function () {
        $('body').toggleClass('right_icon_toggle')
      })

      $.each($('.menu-toggle.toggled'), function (e, a) {
        $(a).next().slideToggle(0)
      })

      $('.menu-toggle').on('click', function (e) {
        var a = $(this)
        var r = a.next()
        if ($(a.parents('ul')[0]).hasClass('list')) {
          var t = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle')
          $.each($('.menu-toggle.toggled').not(t).next(), function (e, a) {
          // eslint-disable-next-line no-unused-expressions
            $(a).is(':visible') && ($(a).prev().toggleClass('toggled'), $(a).slideUp())
          })
        }
        a.toggleClass('toggled')
        r.slideToggle(320)
      })
    }
  }
}
</script>
