import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import lz from 'lz-string';

import authentication from './authentication';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  modules: {
    authentication,
  },
  plugins: [
    createPersistedState({
      getState(key) {
        const state = lz.decompress(window.localStorage.getItem(key));
        return JSON.parse(state);
      },
      setState(key, state) {
        const stateJSON = JSON.stringify(state);
        return window.localStorage.setItem(key, lz.compress(stateJSON));
      },
    }),
  ],
});

export default store;
