<script>
  import SignUp from '../components/signup.vue'
  import Login from '../components/login.vue'
  
  const routes = {
    '': Login,
    'signUp': SignUp,
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