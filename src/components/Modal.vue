<template>
  <div>
    <b-modal
      id="modal-1"
      ref="modal"
      title="New Product"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="nameState"
          label="Product Name"
          label-for="name-input"
          invalid-feedback="Name is required"          
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
            placeholder="Enter Product Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="imageState"
          label="Image Url"
          label-for="image-input"
          invalid-feedback="Image URL is required"          
        >
          <b-form-input
            id="image-input"
            v-model="image"
            :state="imageState"
            required
            placeholder="Enter Image Url"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="priceState"
          label="Price"
          label-for="price-input"
          invalid-feedback="Price is required"          
        >
          <b-form-input
            id="price-input"
            v-model="price"
            :state="priceState"
            required
            placeholder="Enter Price"
            type="number"
            min="1"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="stockState"
          label="Stock"
          label-for="stock-input"
          invalid-feedback="Stock is required"          
        >
          <b-form-input
            id="stock-input"
            v-model="stock"
            :state="stockState"
            required
            placeholder="Enter Stock"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
    import { EventBus } from '@/eventBus.js'

  export default {
    data() {
      return {
        id:'',
        name: '',
        nameState: null,
        image: '',
        imageState: null,
        price: 0,
        priceState: null,
        stock: 0,
        stockState: null, 
        mode: '',               
        submittedNames: []
      }
    },
    mounted() {
      EventBus.$on('editProduct', (val) => {
          this.$bvModal.show('modal-1')
          this.mode = "edit"
          this.name =  val.name
          this.image = val.image,
          this.price = val.price,
          this.stock = val.stock,
          this.id = val.id
      })
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        this.imageState = valid
        this.priceState = valid
        this.stockState = valid
        return valid
      },
      resetModal() {
        this.name =  ''
        this.nameState = null,
        this.image = '',
        this.imageState = null,
        this.price = 0,
        this.priceState = null,
        this.stock = 0,
        this.stockState = null
        this.id = null
        this.mode = "add"
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      async handleSubmit() {
        if (!this.checkFormValidity()) {
          return
        }
        try {
            if(this.mode === "edit"){
                await this.$store.dispatch("EditProduct",{
                    token:this.$store.getters.StateAuthId,
                    name : this.name,
                    image_url: this.image,
                    price:  this.price,
                    stock:  this.stock,
                    id:  this.id,              
                })
            }else{
                await this.$store.dispatch("AddProduct",{
                    token:this.$store.getters.StateAuthId,
                    name : this.name,
                    image_url: this.image,
                    price:  this.price,
                    stock:  this.stock,              
                })
            }
          this.$bvModal.hide('modal-1')
          EventBus.$emit('getProduct',"");        
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>