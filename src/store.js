import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: 'Guest',
      email: '',
      password: '',
      select: ''
    }
  },
  getters: {
    userName(state){
      return state.user.username
    },
  },
  mutations: {
    storeUser(state, user){
      state.user = user
    }
  },
  actions: {
    userLoggedIn({commit}, user) {
      commit('storeUser', user)
       router.replace('/')
      // router.replace('App.vue')
    }
  }
});
