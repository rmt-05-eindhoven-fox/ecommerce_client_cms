<template>
   <div class="card col-4 mx-auto my-2">
    <img src="..\assets\admin_login.png" class="card-img-top img-thumbnail " alt="...">
     <div class="card-body d-flex felx-row border-rounded">
       <form @submit.prevent="login" class="col-12">
          <div class="form-group">
         <label for="email" class="cols-sm-2 control-label"></label>
         <div class="cols-sm-10">
           <div class="input-group">
             <span class="pt-2 px-3 input-group-addon bg-info">
               <i class="fa fa-envelope fa" aria-hidden="true"></i>
             </span>
             <input
             v-model="email"
             type="email"
             class='form-control'
             id="email-login"
             placeholder="Email"/>
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
             <input
             v-model="password"
             type="password"
             class="form-control"
             id='password-login'
             placeholder="Password"/>
           </div>
         </div>
       </div>
    <div class="form-group ">
         <button @click="login" type="button" class="btn btn-primary">Login</button>
    </div>
       </form>
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
      this.$store.dispatch('login', payload)
    }
  }
}
</script>
