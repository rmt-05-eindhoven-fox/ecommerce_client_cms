<template>
 <li class="list-group-item">
    <div class="row">

      <div class="col-3">
        <img class="product-image" :src="productDetail.image_url" :alt="productDetail.name">
      </div>

      <div class="col-6">
        <div class="product-detail">
          <h5 class="mb-3" style="padding:0">{{ productDetail.name }}</h5>
          <p style="margin:0; padding:0">Price : {{ priceCurrency }}</p>
          <p style="margin:0; padding:0">Stock : {{ productDetail.stock }}</p>
        </div>
      </div>

      <div class="col-3">
        <button
          @click="goToProductDetail"
        >Edit</button>
      </div>
    </div>

 </li>

</template>

<script>
export default {
  name: 'ProductCard',
  data () {
    return {
      msg: 'Hello there from ProductCard'
    }
  },
  computed: {
    priceCurrency () {
      let valueStr = this.productDetail.price.toString()
      valueStr = valueStr.split('').reverse()
      const output = []
      for (let i = 0; i < valueStr.length; i++) {
        if (i % 3 === 0 && i > 0) {
          output.unshift('.')
        }
        output.unshift(valueStr[i])
      }
      return output.join('')
    }
  },
  methods: {
    goToProductDetail () {
      this.$router.push({ name: 'ProductDetail', params: { id: this.productDetail.id } })
    }
  },
  props: ['productDetail']
}
</script>

<style>
.product-container{
  height: 150px;
  display : flex;
  flex-direction: row;
  padding : 5px;
  border : 1px solid;
  border-radius : 7px;
  margin:20px;
}
.product-image{
  width : 100px;
}

.product-detail{

  text-align: left;
  margin:0;
  padding:0;
}

</style>
