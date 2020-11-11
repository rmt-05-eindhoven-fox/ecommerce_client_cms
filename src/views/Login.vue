<template>

  <div id='login'>
    <div class='container my-3 border rounded'
       style='width:350px'>
    <div class='row'>
      <div class='col-12 text-center'></div>
    </div>
    <div class="form-group">
         <label for="email" class="cols-sm-2 control-label"></label>
         <div class="cols-sm-10">
           <div class="input-group">
             <span class="pt-2 px-3 input-group-addon bg-info">
              <i class="fal fa-envelope" aria-hidden="true"></i>
             </span>
             <input v-model="email" type="email" class='form-control'/>
           </div>
         </div>
       </div>
    <div class="form-group">
         <label for="password" class="cols-sm-2 control-label"></label>
         <div class="cols-sm-10">
           <div class="input-group">
             <span class="pt-2 px-3 input-group-addon bg-info">
               <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
             </span>
             <input v-model="password" type="password"
                    class="form-control" ref='pdPass' id='pdPass'/>
           </div>
         </div>
       </div>
    <div class="form-group ">
         <button @click="login" type="button" class="btn btn-primary">Login</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      console.log(payload, '<<<< login payload')
      this.$store.dispatch('login', payload)
    }
  }
}
</script>
