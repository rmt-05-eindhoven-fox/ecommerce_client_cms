<template>
    <div class="text-center login-form">
      <b-card
        title="Sign In"
        tag="article"
        style="min-width: 355px; border-radius: 15px; min-height: 425px;"
        class="mb-2 login-card">
        <b-card-text>
          <form>
              <!-- <img class="mt-4 mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"> -->
              <label class="sr-only">Email Address</label>
              <font-awesome-icon :icon="['fas', 'user']" size="2x" id="ikon" />
              <input type="email" id="emailAddress" class="form-control" placeholder="Email Address" required>
              <label class="sr-only">Password</label>
              <input type="password" id="password" class="form-control" placeholder="Password" required>
              <br>
              <a href="#">New member? click here</a>
              <section class="buttons">
                <div class="mt-3">
                    <button class="btn btn-primary btn-block">Sign In</button>
                </div>
                <div class="mt-3 ">
                    <button class="btn btn-warning btn-block">Sign In With Google</button>
                </div>
              </section>
          </form>
        </b-card-text>
      </b-card>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

  .login-form{
    display: flex;
    flex-direction:row-reverse;
    margin-top: 100px;
    font-family: 'Comfortaa', cursive;
  }

  .login-card {
    margin-right: 180px;
    background-color: #ebebeb;
    border: 5px solid #ebebeb;
  }

  form img {
    height: 45px;
    width: 45px;
  }

  #ikon {
    margin: 15px;
  }

  .buttons div button {
    font-size: 15px;
  }

  input {
    margin: 5px;
  }
</style>
