<template>
    <div class="list-products">
        <h1>{{ msg }}</h1><br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card" style="width: 18rem;">
                    <img src="https://ygoprodeck.com/pics/62873545.jpg" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">Dragon Master Knight</h5>
                        <p class="card-text">Price : Rp. 100000</p>
                        <p class="card-text">Stock : Available</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Edit</a>
                        <a href="#" class="card-link">Delete</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios/axios'

export default {
  name: 'ListProducts',
  data () {
    return {
      cards: []
    }
  },
  methods: {
    fetchCards () {
      axios
        .get('/products')
        .then(({ data }) => {
          this.cards = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchCards()
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
