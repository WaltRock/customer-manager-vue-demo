import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import lz from 'lz-string';

import authentication from './authentication';
import customers from './customers';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  modules: {
    authentication,
    customers,
  },
  plugins: [
    createPersistedState({
      getState(key) {
        const storedState = window.localStorage.getItem(key);
        if (!storedState) return {};
        const state = lz.decompress(storedState);
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
