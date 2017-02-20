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
          id: 'ai7rgail73ria3uhr',
          firstname: 'Peter',
          lastname: 'Amaya',
          email: 'PeterPAmaya@teleworm.us',
          city: 'Greensboro',
          state: 'NC',
        }, {
          id: '7a4toi7g4ot8jaefg',
          firstname: 'Derrick',
          lastname: 'Duplantis',
          email: 'DerrickCDuplantis@dayrep.com',
          city: 'Freeport',
          state: 'NY',
        }, {
          id: 'q93r7ga4otilsghae',
          firstname: 'Andrea',
          lastname: 'Hernandez',
          email: 'AndreaRHernandez@armyspy.com',
          city: 'Maumee',
          state: 'OH',
        }, {
          id: 'ia73groi7ah4oitgn',
          firstname: 'Daniel',
          lastname: 'Hurt',
          email: 'DanielGHurt@teleworm.us',
          city: 'Cedar Rapids',
          state: 'IA',
        }, {
          id: '98hi3kubtksgli9rg',
          firstname: 'Milagros',
          lastname: 'Anderson',
          email: 'MilagrosCAnderson@jourrapide.com',
          city: 'Kansas City',
          state: 'KS',
        }, {
          id: 'pl74p39otujs5kuhz',
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
        }, 300);
      });
    },
  },
};
