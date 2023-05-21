<script>
import Navbar from './components/navbar.vue'
import productList from './components/product/productList.vue';
export default {
  components: {
    Navbar,
    productList
  }
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <productList></productList>
  </div>
</template>