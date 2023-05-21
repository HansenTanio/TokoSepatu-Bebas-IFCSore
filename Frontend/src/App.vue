<script>
import Navbar from './components/navbar.vue'
import Home from './components/product/home.vue'
export default {
  components: {
    Navbar,
    Home
  }
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <Home></Home>
  </div>
</template>