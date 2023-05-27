<script>
  import SignUp from '../components/Navbar/signup.vue'
  import Login from '../components/Navbar/login.vue'
  import home from '../components/Product/home.vue'
  import daftarSepatuAdmin from '../components/Admin/daftarSepatuAdmin.vue'
  import tambahSepatu from '../components/Admin/tambahSepatu.vue'
  import editSepatu from '../components/Admin/editSepatu.vue'
  
  const routes = {
    '': Login,
    'signUp': SignUp,
    'home': home,
    'daftarSepatuAdmin': daftarSepatuAdmin,
    'tambahSepatu': tambahSepatu,
    'editSepatu': editSepatu,
  }

  export default {
    data() {
      return {
        currentPath: window.location.pathname
      }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1)] || NotFound
      }
    },
    mounted() {
      window.addEventListener('click', () => {
        this.currentPath = window.location.pathname
      })
    }
  }
</script>

<template>
  <div>
      <component :is="currentView"></component>
  </div>
</template>