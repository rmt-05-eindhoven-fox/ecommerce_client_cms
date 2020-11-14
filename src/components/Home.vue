<template>
    <div>
      <SideBar/>
      <Product/>
      <Modal/>      
    </div>
</template>

<script>
    import SideBar from './Sidebar'
    import Product from './Product'
    import Modal from './Modal'

    export default {
        name: 'Sidebar',
        components: {
            SideBar,
            Product,
            Modal
        },
    }
</script>
