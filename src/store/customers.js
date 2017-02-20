export default {
  namespaced: true,
  state: {
    loading: false,
    customers: [],
  },
  mutations: {
    setCustomers(state, customers) {
      state.customers = customers;
      state.loaded = true;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    fetchCustomers({ commit }, opts = {}) {
      commit('toggleLoading');

      // TODO: fetch customers from server
      const options = Object.assign({
        page: 0,
        count: 10,
      }, opts);

      return new Promise((resolve) => {
        const customers = [{
          firstname: 'Peter',
          lastname: 'Amaya',
          email: 'PeterPAmaya@teleworm.us',
          city: 'Greensboro',
          state: 'NC',
        }, {
          firstname: 'Derrick',
          lastname: 'Duplantis',
          email: 'DerrickCDuplantis@dayrep.com',
          city: 'Freeport',
          state: 'NY',
        }, {
          firstname: 'Andrea',
          lastname: 'Hernandez',
          email: 'AndreaRHernandez@armyspy.com',
          city: 'Maumee',
          state: 'OH',
        }, {
          firstname: 'Daniel',
          lastname: 'Hurt',
          email: 'DanielGHurt@teleworm.us',
          city: 'Cedar Rapids',
          state: 'IA',
        }, {
          firstname: 'Milagros',
          lastname: 'Anderson',
          email: 'MilagrosCAnderson@jourrapide.com',
          city: 'Kansas City',
          state: 'KS',
        }, {
          firstname: 'An',
          lastname: 'K\'ung',
          email: 'AnKung@dayrep.com',
          city: 'Benton Harbor',
          state: 'MI',
        }];

        setTimeout(() => {
          const results = customers.slice(options.page, options.count);
          commit('setCustomers', results);
          commit('toggleLoading');
          resolve();
        }, 2000)
      });
    },
  },
};
