<script>
import Navbar from './components/navbar.vue'
import ProductList from './components/product/productList.vue';
export default {
  components: {
    Navbar,
    ProductList
}
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <ProductList></ProductList>
  </div>
</template>