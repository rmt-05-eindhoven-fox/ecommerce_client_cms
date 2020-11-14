<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline">
                <button class="btn btn-danger my-2 my-sm-0" type="submit" @click="logout()">Logout</button>
            </form>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'Sidebar',
    components: {
    },
    methods: {
        async logout () {
            try {
                let data = await this.$store.dispatch("LogOut")
                this.$router.push('/')
                this.showError = false
            } catch (error) {
                console.log(error)
                this.showError = true
            }
        }
    }
  }
</script>
