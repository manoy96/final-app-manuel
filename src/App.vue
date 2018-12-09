<template>
  <div id="app">
      <main-header></main-header>
    <router-view/>
    <p v-if="['home'].includes($route.name)">Hello, {{ userName }}</p>
    <app-user v-if="['about'].includes($route.name)"></app-user>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import User from './components/User.vue'

export default {
    name: 'app',
    components: {
      'main-header': Header,
      appUser: User,
    },
    directives: {
      'local-highlight': {
        bind(el, bind, vnode){
          var delay = 0;
    if (binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
        }
      }
    },
    computed: {
      userName() {
      return this.$store.getters.userName;
    }
    },
}
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
p {
  font-size: 300%;
}

</style>
