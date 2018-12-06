import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.directive('nintendo', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = '#DD1F20';
    el.style.borderRadius = binding.value + 'px'
  }
});


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount("#app");