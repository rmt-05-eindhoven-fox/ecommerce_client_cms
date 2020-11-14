<template>
  <div class="container">
    <br/>
    <div class="header">
      <div class="row">
      <div class="col-md-6">
        <h3>List Product</h3>
      </div>
      <div class="col-md-6 text-right">
        <button class="btn btn-primary btn-md" type="button" v-b-modal.modal-1>Add Product</button>&nbsp;
      </div>
      </div>
    </div>
    <br/>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">Name</th>
          <th scope="col" class="text-center">Image</th>
          <th scope="col" class="text-center">Price</th>
          <th scope="col" class="text-center">Stock</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in items" :key="row.id">
          <th scope="row" class="text-center">{{index+1}}</th>
          <td class="text-center">{{row.name}}</td>
          <td class="text-center"><img v-bind:src=row.image_url width="100px"></td>
          <td class="text-center">{{row.price}}</td>
          <td class="text-center">{{row.stock}}</td>
          <td class="text-center">
            <button class="btn btn-info btn-sm" type="button" @click="editData(row.id,row.name,row.image_url,row.price,row.stock)">Edit</button>&nbsp;
            <button class="btn btn-danger btn-sm" type="button" @click="deleteData(row.id)">Delete</button>&nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { EventBus } from '@/eventBus.js'

  export default {
    data() {
      return {
        items: [
        ]
      }
    },
    created() {
      this.getData()
    },
    mounted() {
      EventBus.$on('getProduct', (val) => {
          this.getData();
      })
    },
    methods: {
      async getData () {
        try {
          await this.$store.dispatch("GetProduct",this.$store.getters.StateAuthId)
          this.items = this.$store.getters.StateProduct
        } catch (error) {
          console.log(error)
        }
      },
      async deleteData (id) {
        try {
          await this.$store.dispatch("DeleteProduct",{
            token:this.$store.getters.StateAuthId,
            id:id
          })
          this.getData()
        } catch (error) {
          console.log(error)
        }
      },
      async editData (id,name,image,price,stock) {
        try {
          EventBus.$emit('editProduct',{
            id:id,
            name:name,
            image:image,
            price:price,
            stock:stock
          })
        } catch (error) {
          console.log(error)
        }
      },
    }
  }
</script>