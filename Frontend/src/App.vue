<script>
import Navbar from './components/navbar.vue'
import Route from './route/route.vue'
export default {
  components: {
    Navbar,
    Route,
  }
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <Route></Route>
  </div>
</template>