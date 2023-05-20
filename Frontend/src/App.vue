<script>
import Navbar from './components/Navbar.vue'
import Login from './components/login.vue'
import signUp from './components/signup.vue'
export default {
  components: {
    Navbar,
    Login,
    signUp
  }
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <Login></Login>
    <signUp></signUp>
  </div>
</template>