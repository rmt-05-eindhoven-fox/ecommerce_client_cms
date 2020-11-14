<template>
<div id="wrapper">
<!-- Navigation -->
  <nav class="top1 navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">CMS.</a>
      </div>
      <!-- NAVBAR KANAN -->
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle avatar" data-toggle="dropdown"><i class="fa fa-user"></i></a>
          <ul class="dropdown-menu">
            <li class="m_2"><a href="#" @click.prevent="Logout"><i class="fa fa-sign-out"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
      <!-- SIDE BAR -->
      <div class="navbar-default sidebar" role="navigation">
          <div class="sidebar-nav navbar-collapse">
              <ul class="nav" id="side-menu">
                  <li>
                      <a href="index.html"><i class="fa fa-dashboard fa-fw nav_icon"></i>Dashboard</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <div id="page-wrapper">
    <div class="graphs">
      <div class="col_3">
        <div class="col-md-3 widget widget1">
          <div class="r3_counter_box">
            <i class="pull-left fa fa-thumbs-up orange icon-rounded"></i>
            <div class="stats">
              <h5><strong>45%</strong></h5>
              <span>New Orders</span>
            </div>
        </div>
    </div>
  <div class="col-md-3 widget widget1">
    <div class="r3_counter_box">
      <i class="pull-left fa fa-users black icon-rounded"></i>
      <div class="stats">
        <h5><strong>1019</strong></h5>
        <span>New Visitors</span>
      </div>
    </div>
  </div>
  <div class="col-md-3 widget widget1">
    <div class="r3_counter_box">
      <i class="pull-left fa fa-comment orange icon-rounded"></i>
      <div class="stats">
        <h5><strong>1012</strong></h5>
        <span>New Users</span>
      </div>
  </div>
  </div>
  <div class="col-md-3 widget">
    <div class="r3_counter_box">
      <i class="pull-left fa fa-dollar black icon-rounded"></i>
      <div class="stats">
        <h5><strong>$450</strong></h5>
        <span>Profit Today</span>
      </div>
    </div>
  </div>
    <div class="clearfix"> </div>
      </div>

      <div class="content_bottom">
        <div class="grid_3 grid_5">
          <h3>Home</h3>
          <div class="but_list">
            <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
              <ul id="myTab" class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><router-link to="/dashboard/products"><a href="#products" id="products-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Products</a> </router-link></li>
                  <li role="presentation"><router-link to="/dashboard/banner"><a href="#banner" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Banner</a></router-link></li>
              </ul>
              <div id="myTabContent" class="tab-content">
                 <router-view/>
                <!-- <div role="tabpanel" class="tab-pane fade in active" id="products" aria-labelledby="home-tab">
                  <button type="button" class="btn btn-sm btn-success warning_1" data-toggle="modal" data-target="#addModal">Add</button>
                  <AddModal></AddModal>
                  <div class="bs-example4" data-example-id="contextual-table">
                  <table class="table">
                    <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="orange">
                      <th scope="row">1</th>
                      <td>Sandal Jepit</td>
                      <td><img src="https://cf.shopee.co.id/file/b5f3e90d6c32576e94f1270c7b0162e1" style="width: 64px; height: 64px;"></td>
                      <td>Rp 100.000,-</td>
                      <td>50</td>
                      <td>
                        <button type="button" class="btn btn-sm btn-success warning_3" data-toggle="modal" data-target="#editModal">
                          <i class="fa fa-pencil-square-o"></i>
                        </button>
                        <EditModal></EditModal>
                        <button href="" class="btn btn-sm btn-success warning_3"><i class="fa fa-trash"></i></button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Rosey Sandal</td>
                      <td><img src="https://www.dhresource.com/f2/albu/g10/M00/86/C5/rBVaVlyLyXeADY0GAADSze8d2fM952.jpg" style="width: 64px; height: 64px;"></td>
                      <td>Rp 250.000,-</td>
                      <td>10</td>
                      <td>
                        <button href="" class="btn btn-sm btn-success warning_3" data-toggle="modal" data-target="#editModal"><i class="fa fa-pencil-square-o"></i></button>
                        <button href="" class="btn btn-sm btn-success warning_3"><i class="fa fa-trash"></i></button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <center>
                  <nav>
                    <ul class="pagination">
                      <li class="disabled"><a href="#" aria-label="Previous" style="color: black;"><span aria-hidden="true">«</span></a></li>
                      <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                      <li><a href="#" style="color: black;">2</a></li>
                      <li><a href="#" style="color: black;">3</a></li>
                      <li><a href="#" aria-label="Next"><span aria-hidden="true" style="color: black;">»</span></a></li>
                      </ul>
                  </nav>
                </center>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="banner" aria-labelledby="profile-tab">
                <div class="bs-example4" data-example-id="contextual-table">
                  <table class="table">
                    <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="warning">
                      <th scope="row">1</th>
                      <td>Banner 15 Tahun Anniversary</td>
                      <td><img src="https://ae01.alicdn.com/kf/HTB1VQgESXXXXXchapXXq6xXFXXX5.jpg?size=744271&height=666&width=1000&hash=bca07fb8b310c3d9d82ff36ad4ab9ccf" style="width: 360px; height: 180px;"></td>
                      <td>Active</td>
                      <td>
                      <button href="" class="btn-del-edit backlog" data-toggle="modal" data-target="#editModal"><i class="fa fa-pencil-square-o"></i></button>
                      <button href="" class="btn-del-edit backlog"><i class="fa fa-trash-o"></i></button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Summer Sale</td>
                      <td><img src="https://img.moneysavingmom.com/wp-content/uploads/2019/06/Old-Navy-Flip-Flop-Sale.png" style="width: 360px; height: 180px;"></td>
                      <td>Inactive</td>
                      <td>
                      <button href="" class="btn-del-edit backlog" data-toggle="modal" data-target="#editModal"><i class="fa fa-pencil-square-o"></i></button>
                      <button href="" class="btn-del-edit backlog"><i class="fa fa-trash"></i></button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Raya Sale</td>
                      <td><img src="https://mylitter.com/wp-content/uploads/2019/05/Blank-1200-x-630-74-768x403.png" style="width: 360px; height: 180px;"></td>
                      <td>Inactive</td>
                      <td>
                      <button href="" class="btn-del-edit backlog" data-toggle="modal" data-target="#editModal"><i class="fa fa-pencil-square-o"></i></button>
                      <button href="" class="btn-del-edit backlog"><i class="fa fa-trash"></i></button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <center>
                  <nav>
                    <ul class="pagination">
                      <li class="disabled"><a href="#" aria-label="Previous" style="color: black;"><span aria-hidden="true">«</span></a></li>
                      <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                      <li><a href="#" style="color: black;">2</a></li>
                      <li><a href="#" aria-label="Next"><span aria-hidden="true" style="color: black;">»</span></a></li>
                      </ul>
                    </nav>
                </center>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"> </div>
      </div>
      <div class="copy">
        <p>&copy; 2020 CMS. </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import axios from '../config/axios'
import AddModal from "@/components/AddModal.vue"
import EditModal from '@/components/EditModal.vue'

export default {
  name: 'Dashboard',
  components: {
    AddModal, EditModal
  },
  methods: {
    Logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>
