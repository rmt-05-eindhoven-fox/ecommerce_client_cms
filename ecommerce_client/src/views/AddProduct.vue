<template>
<div class="form-add">
  <h2>Fill this form to add more product!</h2>
<form class="mt-5">
  <div class="row">
    <div class="col">
      <label for="name">Name</label>
      <br>
      <input v-model="name" type="text" class="form-control" placeholder="name">
    </div>
    <br>
    <div class="col">
      <label for="image_url">Image URL</label>
      <input v-model="image_url" type="text" class="form-control" placeholder="www.google.com">
    </div>
  </div>
  <br>
  <div class="row">
    <div class="col">
      <label for="price">Price</label>
      <input v-model="price" type="number" class="form-control" placeholder="8000">
    </div>
    <div class="col">
      <label for="stock">Stock</label>
      <input v-model="stock" type="number" class="form-control" placeholder="1">
    </div>
  </div>
  <br>
    <button type="submit" @click.prevent="addCeleb" id="slideUpBtn" class="btn btn-warning">Add Product</button>
</form>
</div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    addCeleb () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addCeleb', payload)
        .then(({ data }) => {
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
#slideUpBtn {
    padding: 12px 24px;
    background-color: transparent;
    border: 2px solid hsl(243, 80%, 62%);
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(1,.15,.34,.92)
}

#slideUpBtn span {
    display: inline-block;
    transition: inherit;
    color: hsl(243, 80%, 62%);
}

#slideUpBtn:hover span {
    opacity: 0;
    transform: translateY(-100%)
}

#slideUpBtn::before {
    content: "";
    background-color: hsl(243, 80%, 62%);;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateY(100%);
    transition: inherit;
    width: 100%;
    transition: transform 0.5s cubic-bezier(1,.15,.34,.92)
}

#slideUpBtn::after {
    content: 'Add Product';
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    transition: inherit;
    transform: translateY(100%);
    width: 100%;

}

#slideUpBtn:hover::before {
    transform: translateY(0) scale(3);
    transition-delay: .025s;
}

#slideUpBtn:hover::after {
    opacity: 1;
    color: hsl(222, 100%, 95%);
    transform: translateY(0);
}
</style>
