<template>
  <div id="app">
      <main-header></main-header>
    <router-view/>
    <!-- <h1>built in directives</h1>
    <p v-text="'some Text'"></p>
    <p v-html="'<strong>Some strong text</strong>'"></p>

    <h1>Custom directives</h1>
    <p v-highlight:background.delayed="'green'">Color this</p> -->


  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'app',
    components: {
      'main-header': Header,
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
    }
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
p {
  font-size: 300%;
}
</style>
