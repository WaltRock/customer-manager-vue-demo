import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import authentication from './authentication';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  modules: {
    authentication,
  },
  plugins: [
    createPersistedState(),
  ],
});

export default store;
