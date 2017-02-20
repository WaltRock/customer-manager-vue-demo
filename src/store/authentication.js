export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    resetUser(state) {
      state.user = null;
    },
  },
  actions: {
    userLogin({ commit }, user = {}) {
      const { email, password } = user;

      // TODO: login via the server
      return new Promise((resolve, reject) => {
        if (!email || !password) {
          commit('resetUser');
          reject();
        } else {
          commit('setUser', email);
          resolve();
        }
      });
    },
    userLogout({ commit }) {
      // TODO: logout via the server
      return new Promise((resolve) => {
        commit('resetUser');
        resolve();
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      // TODO: real user data checking via the server
      return state.user !== null;
    },
  },
};
