export default {
  state: {
    user: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null;
    },
  },
};
