<script>
  import SignUp from '../components/signUp.vue'
  import Login from '../components/login.vue'
  import notFound from '../components/notFound.vue'
  import Home from '../components/product/home.vue'
  const routes = {
    '': Login,
    'signUp': SignUp,
    'notFound': notFound,
    'home': Home
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